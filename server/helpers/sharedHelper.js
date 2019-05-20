const jwt = require('jsonwebtoken');
const config = require('../config');
const transporter = require('../config/mailgun');
const ServerError = require('../errors/serverError');

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




module.exports = {
  createJWT,
  sendMail,

};
