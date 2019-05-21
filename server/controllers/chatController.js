const log = require('../config/winston')(module);
const util = require('util');
const cookie = require('cookie');
const cookieParser = require('cookie-parser');
const sessionStore = require('../config/session').sessionStore;
const sessionCookie = require('../config/session').sessionCookie;
const config = require('../config');
const UserModel = require('../models/userModel');

const ChatHelper = require('../helpers/chatHelper');

module.exports = (server) => {
  io = require('socket.io').listen(server);
  let chatHelper = new ChatHelper();

  io.use(async (socket, next) => {
    let session;
    try {
      session = await chatHelper.getSessionBySocket(socket);
    } catch (err) {
      return next(err);
    }
    // write express session to socket
    socket.request.socketSession = session;
    return next();

    // session.userData = `user: ${session.id}`;
    // session.save(function(err) {
    //   if (err) {
    //     return next(new ClientError({ message: 'Помилка авторизації', status: 401 }));
    //   }
    //   if (session.passport) {
    //     log.debug('user', session.passport.user);
    //   } else {
    //     log.debug('not user');
    //   }
    //   log.debug('midleware socket');
    // });
  });

  io.sockets.on('connection', (socket) => {
    log.debug('socket connected %o', socket.request.socketSession.id);
    // socket.emit('messageFromServer', {message: 'world'});
    socket.on('messageToServer', (data) => {
      // let session;
      // try {
      //   session = await chatHelper.getSessionBySocket(socket);
      // } catch (err) {
      //   return next(err);
      // }
      // session.data = data;
      // session.save(function(err) {
      //   if (err) {
      //     return next(new ClientError({ message: 'Помилка авторизації', status: 401 }));
      //   }
      //   socket.request.session = session;
      //   data.message = 'server response: ' + data.message;
      //   socket.emit('messageFromServer', data);
      // });
      const socketSession = socket.request.socketSession;
      if (socketSession.passport) {
        log.debug(`user ${socketSession.passport.user}, messageFromServer: ${data.message}`);
        data.message = `user: ${socketSession.passport.user}, messageFromServer: ${data.message}`;
        socket.emit('messageFromServer', data);
      } else {
        log.debug(`not user, messageFromServer: ${data.message}`);
        data.message = `not user, messageFromServer: ${data.message}`;
        socket.emit('messageFromServer', data);
      }
    });
  }
  );
};
