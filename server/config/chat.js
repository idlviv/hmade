const log = require('../config/winston')(module);
const ChatHelper = require('../helpers/chatHelper');
const ApplicationError = require('../errors/applicationError');
const ClientError = require('../errors/clientError');
const uuidv4 = require('uuid/v4');

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

    return next();
  });

  io.on('connection', async (socket) => {
    chatHelper.logEvents(socket);

    log.debug('socket connected %o', await chatHelper.getConnectedSockets(io));
    const regitredUsersRoles = ['guest', 'user', 'google', 'facebook'];
    const previleggedRoles = ['manager', 'admin']; // TODO: remove admin

    if (socket.request.payload.user && previleggedRoles.indexOf(socket.request.payload.user.role) !== -1) {

      // manager connected
      socket.emit('message', 'Hello manager ' + socket.request.payload.user.name);
      let connectedManagers;
      try {
        connectedManagers = await chatHelper.getConnectedManagers(io);
      } catch (err) {
        return new ApplicationError(err);
      }
      // emit to all - updated managers list
      io.emit('activeManagers', connectedManagers);
    } else if (socket.request.payload.user && regitredUsersRoles.indexOf(socket.request.payload.user.role) !== -1) {

      // registred user connected
      socket.emit('message', 'Hello ' + socket.request.payload.user.name);
      let connectedManagers;
      try {
        connectedManagers = await chatHelper.getConnectedManagers(io);
      } catch (err) {
        return new ApplicationError(err);
      }
      // emit to user - updated managers list
      socket.emit('activeManagers', connectedManagers);
    } else {
      // casual (guest) user connected
      // ask for name
      socket.emit('getGuestName', null);
    }

    // listeners
    socket.on('guestName', async (data) => {
      // casual (guest) user connected and called his name
      socket.request.payload.user.name = data;
      socket.emit('message', 'Hello ' + socket.request.payload.user.name);
      let connectedManagers;
      try {
        connectedManagers = await chatHelper.getConnectedManagers(io);
      } catch (err) {
        return new ApplicationError(err);
      }
      // emit to casual (guest) user - updated managers list
      socket.emit('activeManagers', connectedManagers);
    });

    socket.on('disconnect', async function onDisconnect(reason) {
      try {
        connectedManagers = await chatHelper.getConnectedManagers(io);
      } catch (err) {
        return new ApplicationError(err);
      }
      // emit to all - updated managers list
      io.emit('activeManagers', connectedManagers);

      log.debug('This socket ' + socket.id + ' lost connection - reason: ' + reason);
    });

    socket.on('joinToManager', async (manager_id) => {
      let socketsByUser_id;
      try {
        socketsByUser_id = await chatHelper.getSocketsByUser_id(manager_id);
      } catch (err) {
        return new ApplicationError(err);
      }
      log.debug('socket rooms prev %o', socket.rooms);

      const room = uuidv4();
      io.sockets.connected[socketsByUser_id[0]].join(room);
      socket.join(room);

      socket.emit('joinToManager', room);
      io.to(socketsByUser_id[0]).emit('joinToManager', room);
      // log.debug('joinToManager %o', getSocketsByUser_id);
      log.debug('socket rooms %o', socket.rooms);
    // socket.emit('joinToManager', manager_id);
    // socket.emit('messageFromServer', {message: `wellcome to ${params.room}`});
    // socket.broadcast.to(params.room).emit('messageFromServer', { message: `new user joined to ${params.room}` });
    });
  });
};

//   socket.broadcast.emit('messageFromServer', {
//     message: `new user connected: ${socket.request.payload.user.login}`,
//     payload: connectedManagers,
//   });

//   socket.emit('messageFromServer', {
//     message: `welcome ${socket.request.payload.user.login}`,
//     payload: connectedManagers,
//   });


//   socket.on('messageToServer', (msg) => {
//     // msg.room = msg.room || 'common';
//     // log.debug('msg %o', msg);
//     msg.message = `you: ${msg.message}`;
//     socket.emit('messageFromServer', msg);
//     msg.message = `${socket.id}: ${msg.message}`;
//     socket.broadcast.emit('messageFromServer', msg);
//     // const socketSession = socket.request.socketSession;
//     // if (socketSession.passport) {
//     //   log.debug(`user ${socketSession.passport.user}, messageFromServer: ${msg.message}`);
//     //   msg.message = `user: ${socketSession.passport.user}, messageFromServer: ${msg.message}`;
//     //   socket.broadcast.to(msg.room).emit('messageFromServer', msg);
//     // } else {
//     //   log.debug(`not user, messageFromServer: ${msg.message}`);
//     //   msg.message = `not user, messageFromServer: ${msg.message}`;
//     //   socket.broadcast.to(msg.room).emit('messageFromServer', msg);
//     // }
//   });
// });
// };

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
