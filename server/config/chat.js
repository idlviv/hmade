const log = require('../config/winston')(module);
const ChatHelper = require('../helpers/chatHelper');
const ApplicationError = require('../errors/applicationError');
const ClientError = require('../errors/clientError');

module.exports = (server) => {
  const io = require('socket.io').listen(server);
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
  });

  function getConnectedUsers() {
    return new Promise((resolve, reject) => {
      io.sockets.clients((err, client) => {
        if (err) {
          reject(new ApplicationError({ message: 'Помилка отримання активних коритстувачів чату', status: 500 }));
        }
        resolve(client);
      });
    });
  }
  // io.emit - to all connected users -> io.to('room).emit - to all users connected to 'room'
  // socket.broadcast.emit - to all users exept current -> socket.broadcast.to('room').emit
  // socket.emit - to specific user?


  // function logAllEmitterEvents(eventEmitter) {
  //   let emitToLog = eventEmitter.emit;
  //   console.log('ev');
  //   eventEmitter.emit = function() {
  //     let event = arguments[0];
  //     console.log('event emitted: ' + event);
  //     emitToLog.apply(eventEmitter, arguments);
  //   };
  // }
  // emitLogger = new Emitter();
  // emitLogger.emit(io);

  io.on('connection', async (socket) => {
 
    // class Emitter extends require('events') {
    //   emit(...args) {
    //     log.debug('emitted %o', args[0]);
    //     super.emit(args);
    //   }
    // }

    function logEvents(emitter) {
      _emitter = emitter.emit;
      emitter.emit = function(...args) {
        log.debug('emitted %o', args[0]);
        _emitter.apply(emitter, args);
      };
    }

    logEvents(socket);
    // emitLogger(socket);

    // logAllEmitterEvents(socket);
    // logAllEmitterEvents(io);

    log.debug('socket connected %o', await getConnectedUsers());
    socket.on('disconnect', async function onDisconnect(reason) {
      log.debug('socket connected %o', await getConnectedUsers());
      console.log('This socket lost connection %o', reason);
    });

    socket.on('join', (params) => {
      socket.join(params.room);
      socket.emit('messageFromServer', {message: `wellcome to ${params.room}`});
      socket.broadcast.to(params.room).emit('messageFromServer', { message: `new user joined to ${params.room}` });
    });

    socket.on('messageToServer', (msg) => {
      // msg.room = msg.room || 'common';
      log.debug('msg %o', msg);
      msg.message = `you: ${msg.message}`;
      socket.emit('messageFromServer', msg);
      msg.message = `${socket.id}: ${msg.message}`;
      socket.broadcast.emit('messageFromServer', msg);
      // const socketSession = socket.request.socketSession;
      // if (socketSession.passport) {
      //   log.debug(`user ${socketSession.passport.user}, messageFromServer: ${msg.message}`);
      //   msg.message = `user: ${socketSession.passport.user}, messageFromServer: ${msg.message}`;
      //   socket.broadcast.to(msg.room).emit('messageFromServer', msg);
      // } else {
      //   log.debug(`not user, messageFromServer: ${msg.message}`);
      //   msg.message = `not user, messageFromServer: ${msg.message}`;
      //   socket.broadcast.to(msg.room).emit('messageFromServer', msg);
      // }
    });
  });
};
