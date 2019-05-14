const log = require('../config/winston')(module);
const util = require('util');
const cookie = require('cookie');
const cookieParser = require('cookie-parser');
const sessionStore = require('../config/session').sessionStore;
const sessionCookie = require('../config/session').sessionCookie;
const config = require('../config');
const UserModel = require('../models/userModel');
const passport = require('passport');

module.exports = (server) => {
  io = require('socket.io').listen(server);

  io.use(function(socket, next) {
    const handshakeData = socket.request;
    handshakeData.cookies = cookie.parse(handshakeData.headers.cookie || '');
    const sidCookie = handshakeData.cookies[config.get('sessionSid')];
    const sid = cookieParser.signedCookie(sidCookie, config.get('SESSION_SECRET'));
    // make sure the handshake data looks good as before
    // if error do this:
    // next(new Error('not authorized'));
    // else just call next

    sessionStore.load(sid, function(err, session) {
      if (arguments.length == 0) {
        // no arguments => no session
        return next(new ClientError({ message: 'Помилка авторизації', status: 401 }));
      } else {
        // socket.request.session = session;
        session.userData = `user3: ${session.id}`;
        session.save(function(err) {
          if (err) {
            return next(new ClientError({ message: 'Помилка авторизації', status: 401 }));
          }
        });
        if (socket.request.session.passport) {
          UserModel.findById(socket.request.session.passport.user._id).then(
              (user) => {
                socket.request.session.user = user;
                return next();
              },
              (err) => next(new ClientError({ message: 'Помилка авторизації', status: 401 }))
          );
        }
      }
    });
  });

  io.sockets.on('connection', (socket) => {

    log.debug('socket connected %o', socket.request.session);
    // socket.emit('messageFromServer', {message: 'world'});
    socket.on('messageToServer', (data) => {
      data.message = 'server response: ' + data.message;
      socket.emit('messageFromServer', data);
    });
  }
  );
};
