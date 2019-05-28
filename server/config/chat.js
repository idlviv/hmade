const log = require('../config/winston')(module);
const ChatHelper = require('../helpers/chatHelper');
const ApplicationError = require('../errors/applicationError');
const ClientError = require('../errors/clientError');

module.exports = (io) => {
  let chatHelper = new ChatHelper();

  io.use(async (socket, next) => {
    let session;
    try {
      session = await chatHelper.getSessionBySocket(socket);
    } catch (err) {
      return next(err);
    }

    try {
      await chatHelper.storePayloadInSocketSession(session, socket);
    } catch (err) {
      return next(err);
    }

    // try {
    //   await chatHelper.storeUserInSocketSession(session);
    // } catch (err) {
    //   return next(err);
    // }

    // write express session to socket
    // socket.request.socketSession = session;

    // socket.request.payload = {
    //   session_id: session.id,
    //   socket_id: socket.id,
    //   user: socket.request.socketSession.userData,
    // };
    // const session_id = session.id;
    // const socket_id = socket.id;
    // const user = socket.request.socketSession.userData;

    // try {
    //   await chatHelper.storeActiveUsersToDb(session_id, socket_id, user);
    // } catch (err) {
    //   return next(err);
    // }

    return next();
  });


  // io.emit - to all connected users -> io.to('room).emit - to all users connected to 'room'
  // socket.broadcast.emit - to all users exept current -> socket.broadcast.to('room').emit
  // socket.emit - to specific user?

  io.on('connection', async (socket) => {
    log.debug('socket connected %o');
    chatHelper.logEvents(socket);


    let connectedManagers;
    try {
      connectedManagers = await chatHelper.getConnectedManagers(io);
    } catch (err) {
      return next(err);
    }

    io.emit('changeStatus', connectedManagers);

    socket.broadcast.emit('messageFromServer', {
      message: `new user connected: ${socket.request.payload.user.login}`,
      payload: connectedManagers,
    });

    socket.emit('messageFromServer', {
      message: `welcome ${socket.request.payload.user.login}`,
      payload: connectedManagers,
    });


    socket.on('disconnect', async function onDisconnect(reason) {
      try {
        connectedManagers = await chatHelper.getConnectedManagers(io);
      } catch (err) {
        return next(err);
      }

      io.emit('changeStatus', connectedManagers);
      log.debug('socket connected %o', await chatHelper.getUniqueConnectedSessionsPayload(io));
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
