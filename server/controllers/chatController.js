const log = require('../config/winston')(module);
const util = require('util');
const cookie = require('cookie');
const cookieParser = require('cookie-parser');
const sessionStore = require('../config/session').sessionStore;
const sessionCookie = require('../config/session').sessionCookie;
const config = require('../config');
const UserModel = require('../models/userModel');
const getSessionBySocket = require('../helpers/sharedHelper').getSessionBySocket;

module.exports = (server) => {
  io = require('socket.io').listen(server);

  io.use(function (socket, next) {
    getSessionBySocket(socket)
      .then(
        (session) => {
          session.userData = `user: ${session.id}`;
          session.save(function (err) {
            if (err) {
              return next(new ClientError({ message: 'Помилка авторизації', status: 401 }));
            }
            if (session.passport) {
              log.debug('user', session.passport.user);
            } else {
              log.debug('not user');
            }
            log.debug('midleware socket');
            socket.request.session = session;
            next();
          })
      },
        (err) => next(err)
      );
  });

  io.sockets.on('connection', (socket) => {

    log.debug('socket connected %o', socket.request.session.id);
    // socket.emit('messageFromServer', {message: 'world'});
    socket.on('messageToServer', (data) => {
      getSessionBySocket(socket)
      .then(
        (session) => {
          session.data = data;
          session.save(function (err) {
            if (err) {
              return next(new ClientError({ message: 'Помилка авторизації', status: 401 }));
            }
            socket.request.session = session;
            data.message = 'server response: ' + data.message;
            socket.emit('messageFromServer', data);
          })
      },
        (err) => next(err)
      );

    });
  }
  );
};
