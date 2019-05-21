const config = require('../config');
// Parse an HTTP Cookie header string and returning an object of all cookie name-value pairs
const cookie = require('cookie');
// Parse Cookie header and populate req.cookies with an object keyed by the cookie names
const cookieParser = require('cookie-parser');
const sessionStore = require('../config/session').sessionStore;

class ChatHelper {
  constructor() {}

  async getSessionBySocket(socket) {
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
          resolve(session);
        }
      });
    });
  }
}

module.exports = ChatHelper;

