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

  // io.$emit - to server (for io.on())
  // io.emit - to all connected users -> io.to('room).emit - to all users connected to 'room'
  // socket.broadcast.emit - to all users exept current -> socket.broadcast.to('room').emit
  // socket.emit - to specific user?

  // socket.emit('message', "this is a test"); //sending to sender-client only
  // socket.broadcast.emit('message', "this is a test"); //sending to all clients except sender
  // socket.broadcast.to('game').emit('message', 'nice game'); //sending to all clients in 'game' room(channel) except sender
  // socket.to('game').emit('message', 'enjoy the game'); //sending to sender client, only if they are in 'game' room(channel)
  // socket.broadcast.to(socketid).emit('message', 'for your eyes only'); //sending to individual socketid
  // io.emit('message', "this is a test"); //sending to all clients, include sender
  // io.in('game').emit('message', 'cool game'); //sending to all clients in 'game' room(channel), include sender
  // io.of('myNamespace').emit('message', 'gg'); //sending to all clients in namespace 'myNamespace', include sender
  // socket.emit(); //send to all connected clients
  // socket.broadcast.emit(); //send to all connected clients except the one that sent the message
  // socket.on(); //event listener, can be called on client to execute on server
  // io.sockets.socket(); //for emiting to specific clients
  // io.sockets.emit(); //send to all connected clients (same as socket.emit)
  // io.sockets.on(); //initial connection from a client.
  
  io.on('reloadSession', (session_id) => {
    log.debug('reload');
    io.clients.forEach(async (socket) => {
      if (socket.request.payload.session_id !== session_id) {
        return;
      } else {
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
      }
    });
  });

  io.on('connection', async (socket) => {
    chatHelper.logEvents(socket);
    

    log.debug('socket connected %o', await chatHelper.getConnectedSockets(io));

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
      log.debug('socket disconnected %o', await chatHelper.getConnectedSockets(io));

      try {
        connectedManagers = await chatHelper.getConnectedManagers(io);
      } catch (err) {
        return next(err);
      }

      io.emit('changeStatus', connectedManagers);
      console.log('This socket lost connection %o', reason);
    });

    socket.on('join', (params) => {
      socket.join(params.room);
      socket.emit('messageFromServer', {message: `wellcome to ${params.room}`});
      socket.broadcast.to(params.room).emit('messageFromServer', { message: `new user joined to ${params.room}` });
    });

    socket.on('messageToServer', (msg) => {
      // msg.room = msg.room || 'common';
      // log.debug('msg %o', msg);
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
