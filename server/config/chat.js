const log = require('../config/winston')(module);
const ChatHelper = require('../helpers/chatHelper');

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
    const clients = io.sockets.clients().connected;
    const sockets = Object.values(clients);
    const users = sockets.map((val) => val.user);
    return users;
  }

  // io.emit - to all connected users -> io.to('room).emit - to all users connected to 'room'
  // socket.broadcast.emit - to all users exept current -> socket.broadcast.to('room').emit
  // socket.emit - to specific user?

  io.on('connection', (socket) => {
    socket.on('join', (params) => {
      socket.join(params.room);
      socket.emit('messageFromServer', {message: `wellcome to ${params.room}`});
      socket.broadcast.to(params.room).emit('messageFromServer', { message: `new user joined to ${params.room}` });
    });
    log.debug('socket connected %o');
    socket.on('messageToServer', (msg) => {
      log.debug('msg %o', msg); 
      const socketSession = socket.request.socketSession;
      if (socketSession.passport) {
        log.debug(`user ${socketSession.passport.user}, messageFromServer: ${msg.message}`);
        msg.message = `user: ${socketSession.passport.user}, messageFromServer: ${msg.message}`;
        socket.broadcast.to(msg.room).emit('messageFromServer', msg);
      } else {
        log.debug(`not user, messageFromServer: ${msg.message}`);
        msg.message = `not user, messageFromServer: ${msg.message}`;
        socket.broadcast.to(msg.room).emit('messageFromServer', msg);
      }
    });
  }
  );
};
