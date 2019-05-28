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
        const { login, provider, role } = {
          login: 'guest ' + socket.id,
          provider: 'chat',
          role: 'casual',
        };
        user = { login, provider, role };
      }
      socket.request.payload = {
        session_id: session.id,
        socket_id: socket.id,
        user,
      };
      session.socket_id = socket.id;
      try {
        await this.saveSession(session);
      } catch (err) {
        return reject(err);
      }
      resolve();
    });
  }

  async getConnectedSockets(io) {
    return new Promise((resolve, reject) => {
      io.sockets.clients((err, clients) => {
        if (err) {
          reject(new ApplicationError({ message: 'Помилка отримання активних коритстувачів чату', status: 500 }));
        }
        resolve(clients);
      });
    });
  }

  // payloads of all unique express sessions that has active(connected) sockets
  async getUniqueConnectedSessionsPayload(io) {
    return new Promise(async (resolve, reject) => {
      let connectedSockets;
      try {
        connectedSockets = await this.getConnectedSockets(io);
      } catch (err) {
        reject(err);
      }
      const allconnectedSocketsPayload = connectedSockets.map((socket) => io.sockets.connected[socket].request.payload);
      const uniqueConnectedSessionsPayload = allconnectedSocketsPayload
          .map((value) => value.session_id)
          .map((client, index, self) => self.indexOf(client) === index ? allconnectedSocketsPayload[index] : false)
          .filter((value) => value);
      resolve(uniqueConnectedSessionsPayload);
    });
  }

  async getUniqueConnectedSessionsUsers(io) {
    return new Promise(async (resolve, reject) => {
      let connectedSockets;
      try {
        connectedSockets = await this.getConnectedSockets(io);
      } catch (err) {
        reject(err);
      }
      const allconnectedSocketsPayload = connectedSockets.map((socket) => io.sockets.connected[socket].request.payload);
      const uniqueConnectedSessionsUsers = allconnectedSocketsPayload
          .map((value) => value.user.login)
          .map((client, index, self) => self.indexOf(client) === index ? allconnectedSocketsPayload[index] : false)
          .filter((value) => value)
          .map((value) => value.user);
      resolve(uniqueConnectedSessionsUsers);
    });
  }

  async getConnectedManagers(io) {
    return new Promise(async (resolve, reject) => {
      let connectedSockets;
      try {
        connectedSockets = await this.getConnectedSockets(io);
      } catch (err) {
        reject(err);
      }
      const connectedManagers = connectedSockets
          .map((socket) => io.sockets.connected[socket].request.payload)
          .filter((value) => value.user.role === 'admin');

      log.debug('connectedManagers %o', connectedManagers);
      const connectedUniqueManagers = connectedManagers
          .map((value) => value.user.login)
          .map((client, index, self) => self.indexOf(client) === index ? connectedManagers[index] : false)
          .filter((value) => value)
          .map((value) => value.user);
      resolve(connectedUniqueManagers);
    });
  }

  async getConnectedUsersCredentials(io) {
    return new Promise(async (resolve, reject) => {
      let connectedSockets;
      try {
        connectedSockets = await this.getConnectedSockets(io);
      } catch (err) {
        reject(err);
      }
      const allconnectedSocketsPayload = connectedSockets.map((socket) => io.sockets.connected[socket].request.payload);
      resolve(allconnectedSocketsPayload);
    });
  }

  logEvents(emitter) {
    const _emitter = emitter.emit;
    emitter.emit = function(...args) {
      log.debug('emitted %o', args[0]);
      _emitter.apply(emitter, args);
    };
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

