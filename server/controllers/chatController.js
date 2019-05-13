const log = require('../config/winston')(module);
const util = require('util');
const cookie = require('cookie');
const cookieParser = require('cookie-parser');
const sessionStorage = require('../config/session').sessionStorage;
const config = require('../config');
const UserModel = require('../models/userModel');

module.exports = (server) => {
  io = require('socket.io').listen(server);

  io.use(function (socket, next) {
    const handshakeData = socket.request;
    handshakeData.cookies = cookie.parse(handshakeData.headers.cookie || '');
    const sidCookie = handshakeData.cookies[config.get('sessionSid')];
    const sid = cookieParser.signedCookie(sidCookie, config.get('SESSION_SECRET'));
    // make sure the handshake data looks good as before
    // if error do this:
    // next(new Error('not authorized'));
    // else just call next

    sessionStorage.load(sid, function(err, session) {
      if (arguments.length == 0) {
        // no arguments => no session
        return next(new ClientError({message: 'Помилка авторизації', status: 401}));
      } else {
        socket.request.session = session;
        UserModel.findById(socket.request.session.id).then(
            (user) => {
              socket.request.session.user._doc = user;
              return next();
            },
            (err) => next(new ClientError({message: 'Помилка авторизації', status: 401}))
        );
      }
    });
  });

  io.sockets.on('connection', (socket) => {
    log.debug('socket connected %o', socket.request.session.user._doc);

    // socket.emit('messageFromServer', {message: 'world'});
    socket.on('messageToServer', (data) => {
      data.message = 'server response: ' + data.message;
      socket.emit('messageFromServer', data);
    });
  }
  );
};