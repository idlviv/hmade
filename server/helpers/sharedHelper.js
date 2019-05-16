const jwt = require('jsonwebtoken');
const config = require('../config');
const transporter = require('../config/mailgun');
const ServerError = require('../errors/serverError');
const cookie = require('cookie');
const cookieParser = require('cookie-parser');
const sessionStore = require('../config/session').sessionStore;

/**
 *  Create JWT token
 *
 * @param {string} prefix - prefix for token
 * @param {object} sub - subject payload
 * @param {number} expire - seconds
 * @param {string} secret - object key from config
 * @return {string}
 */
const createJWT = function(prefix, sub, expire, secret) {
  const date = Math.floor(Date.now() / 1000); // in seconds
  return prefix + jwt.sign(
      {
        sub,
        iat: date,
        exp: date + (expire), // 60 секунд * 60 хвилин = 1 година * 24 год * 7 днів
      },
      config.get(secret)
  );
};

/**
 * Send mail
 *
 * @param {Object} mailOptions
 * @return {Promise}
 */
const sendMail = function(mailOptions) {
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        reject(new ServerError({
          message: 'Помилка відправки email',
        }));
      }
      resolve(info);
    });
  });
};

const getSessionBySocket = function(socket) {
  return new Promise((resolve, reject) => {
    const handshakeData = socket.request;
    handshakeData.cookies = cookie.parse(handshakeData.headers.cookie || '');
    const sidCookie = handshakeData.cookies[config.get('sessionSid')];
    const sid = cookieParser.signedCookie(sidCookie, config.get('SESSION_SECRET'));

    sessionStore.load(sid, function(err, session) {
      if (err) {
        reject(new ClientError({ message: 'Помилка авторизації', status: 401 }));
      }
      if (arguments.length == 0) {
        // no arguments => no session
        reject(new ClientError({ message: 'Помилка авторизації', status: 401 }));
      } else {
        resolve(session)
      }
    });
  });
}


module.exports = {
  createJWT,
  sendMail,
  getSessionBySocket
};
