const config = require('../config');
// Parse an HTTP Cookie header string and returning an object of all cookie name-value pairs
const cookie = require('cookie');
// Parse Cookie header and populate req.cookies with an object keyed by the cookie names
const cookieParser = require('cookie-parser');
const sessionStore = require('../config/session').sessionStore;
const ClientError = require('../errors/clientError');
const ApplicationError = require('../errors/applicationError');
const DBHelper = require('./dbHelper');
const log = require('../config/winston')(module);

class ChatHelper {
  constructor() {
    this.dbHelper = new DBHelper();
  }

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

  async storePayloadInSocketSession(session, socket) {
    return new Promise(async (resolve, reject) => {
      let user;
      if (session.passport && session.passport.user) {
        try {
          user = await this.dbHelper.findById('UserModel', session.passport.user);
        } catch (err) {
          return reject(err);
        }
        const { _id, avatar, role, login, provider, name, surname } = user;
        user = { _id, avatar, role, login, provider, name, surname };
      } else {
        const { login, provider } = {
          login: 'guest',
          provider: 'chat',
        };
        user = { login, provider };
      }
      socket.request.payload = {
        session_id: session.id,
        socket_id: socket.id,
        user,
      };
      // try {
      //   await this.saveSession(session);
      // } catch (err) {
      //   return reject(err);
      // }
      resolve();
    });
  }

  async getConnectedUsers(io) {
    return new Promise((resolve, reject) => {
      io.sockets.clients((err, clients) => {
        if (err) {
          reject(new ApplicationError({ message: 'Помилка отримання активних коритстувачів чату', status: 500 }));
        }
        resolve(clients);
      });
    });
  }

  async getConnectedUsersCredentials(io) {
    return new Promise(async (resolve, reject) => {
      let connectedUsers;
      try {
        connectedUsers = await this.getConnectedUsers(io);
      } catch (err) {
        reject(err);
      }
      resolve(connectedUsers.map((user) => io.sockets.connected[user].request.payload)
      );
    });
  }

  // async storeUserInSocketSession(session) {
  //   return new Promise(async (resolve, reject) => {
  //     let user;
  //     if (session.passport && session.passport.user) {
  //       try {
  //         user = await this.dbHelper.findById('UserModel', session.passport.user);
  //       } catch (err) {
  //         return reject(err);
  //       }
  //       const { _id, avatar, role, login, provider, name, surname } = user;
  //       session.userData = { _id, avatar, role, login, provider, name, surname };
  //     } else {
  //       const { login, provider } = {
  //         login: 'guest',
  //         provider: 'chat',
  //       };
  //       session.userData = { login, provider };
  //     }
  //     try {
  //       await this.saveSession(session);
  //     } catch (err) {
  //       return reject(err);
  //     }
  //     resolve();
  //   });
  // }

  async saveSession(session) {
    return new Promise(async (resolve, reject) => {
      session.save(function(err) {
        if (err) {
          reject(new ApplicationError({ message: 'Помилка збереження сесії', status: 500 }));
        }
        resolve();
      });
    });
  }

  async storeActiveUsersToDb(session_id, socket_id, user) {
    return new Promise(async (resolve, reject) => {
      if (user._id) {
      // registred user in db
        try {
          const res = await this.dbHelper.updateOne(
              'ChatActiveUserModel',
              {_id: user._id},
              { _id: user._id, session_id, socket_id, updatedAt: Date.now()},
              true
          );
          log.debug('res', res);
          return resolve();
        } catch (err) {
          return reject(err);
        }
        // find by _id in active chat users db and upsert
      } else {
      // new user, not in db
        return resolve();

        // find by session_id in active chat users db and upsert
      }
    });
  }
}

module.exports = ChatHelper;
