const log = require('../config/winston')(module);
const ChatHelper = require('../helpers/chatHelper');
const SocketError = require('../errors/socketError');
const uuidv4 = require('uuid/v4');
const { Observable } = require('rxjs');

class Msg {
  constructor(message, payload = null) {
    this.message = message;
    this.payload = payload;
  }
}

module.exports = (io) => {
  let chatHelper = new ChatHelper();

  // listener for server side socket errors
  function errorHandler(err) {
    log.debug('errorHandler %o', err);
    // socket.emit('error', err);
  }

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

    let connectedManagers;
    try {
      connectedManagers = await chatHelper.getConnectedManagers(io);
    } catch (err) {
      errorHandler(err);
    }

    const regitredUsersRoles = ['guest', 'user', 'google', 'facebook'];
    const previleggedRoles = ['manager', 'admin']; // TODO: remove admin

    if (socket.request.payload.user && previleggedRoles.indexOf(socket.request.payload.user.role) !== -1) {
      // manager connected
      emit('message', new Msg('Hello manager ' + socket.request.payload.user.name))
          .subscribe(() => {}, (err) => errorHandler(err));
      let connectedManagers;
      try {
        connectedManagers = await chatHelper.getConnectedManagers(io);
      } catch (err) {
        errorHandler(err);
      }

      // emit to all - updated managers list
      io.emit('activeManagers', new Msg('Update managers list', connectedManagers));
    } else if (socket.request.payload.user && regitredUsersRoles.indexOf(socket.request.payload.user.role) !== -1) {
      // registred user connected
      // emit('message', new Msg('Hello ' + socket.request.payload.user.name))
      //     .subscribe(() => { }, (err) => errorHandler(err));

      // emit to user - updated managers list
      socket.emit('activeManagers', new Msg('Managers list', connectedManagers));
    } else {
      // casual (guest) user connected
      // emit('message', new Msg('Hello'))
      //     .subscribe(() => { }, (err) => errorHandler(err));

      // emit to user - updated managers list
      socket.emit('activeManagers', new Msg('Managers list', connectedManagers));

      // ask for name
      // socket.emit('getGuestName', null);
    }


    /**
     * @typedef {Object} IChatMsg
     * @property {string} message
     * @property {Object} [payload] //unnecessary param
     */

    /**
     * Socket emitter
     *
     * @param {string} eventName
     * @param {IChatMsg} msg
     * @return {Observable<IChatMsg>}
     */
    function emit(eventName, msg) {
      return new Observable((observer) => {
        // set timeout for message delivery
        const timeout = 4000;
        let timer = setTimeout(function() {
          observer.error(new SocketError({
            message: `not delivered, timeout error - eventName: ${eventName}, message: ${msg.message} - not delivered`,
            code: 'timeout',
          }));
        }, timeout);

        socket.emit(eventName, msg, function(success) {
          // if callback from client received, then cancel timeout error
          clearTimeout(timer);
          if (success) {
            // client accepted message
            observer.next(true);
            observer.complete();
          } else {
            // client rejected message
            observer.error(new SocketError({
              message: `rejected from client - eventName: ${eventName}, message: ${msg.message}`,
              code: 'rejected',
            }));
          }
        });
      });
    }

    /**
     * Listener
     *
     * @param {string} eventName
     * @return {Observervable<IChatMsg>}
     */
    function on(eventName) {
      return new Observable((observer) => {
        socket.on(eventName, (msg, callback) => {
          // send confirmation to front
          callback(true);
          // pass message
          observer.next(msg);
        });
      });
    }

    on('message')
        .subscribe(
            (msg) => {
              if (msg.room) {
                socket.broadcast.to(msg.room).emit('message', msg);
              }
              log.debug('message %o', msg);
            },
            (err) => errorHandler(err)
        );

    on('joinToManagerRequest')
        .subscribe(async (msg) => {
          const manager_id = msg.payload;

          // get all open sockets by manager_id
          let socketsByUser_id;
          try {
            socketsByUser_id = await chatHelper.getSocketsByUser_id(manager_id);
          } catch (err) {
            return errorHandler(err);
          }

          // create room
          const room = uuidv4();

          // join current user to room
          socket.join(room);

          // send confirmation to user
          // and wait for managers accept
          emit('joinToManagerAccept', new Msg('Очікуйте відповіді', null, room))
              .subscribe(() => { }, (err) => errorHandler(err));

          // send request to manager
          io.to(socketsByUser_id[0]).emit('joinToManagerRequest', new Msg('Користувач чекає на відповідь', null, room));


          // io.sockets.connected[socketsByUser_id[0]].join(room);
          // io.to(socketsByUser_id[0]).emit('joinToManager', new Msg('Join to managers room', room));
          log.debug('socket rooms %o', socket.rooms);

        },
        (err) => errorHandler(err)
        );

    on('joinToManagerAccept')
        .subscribe(async (msg) => {
          const room = msg.payload;

          // join manager to room
          socket.join(room);

          // send confirmation to manager
          emit('joinToManagerAccept', new Msg('Ви приєдналися до чату', null, room))
              .subscribe(() => { }, (err) => errorHandler(err));

          socket.to(room).emit('joinToManagerAccept', new Msg('Менеджер приєднався до чату'));
        },
        (err) => errorHandler(err)
        );
  });
};

// on('tmpEvent')
//     .subscribe(async (obj) => {
//       const {message, callback} = obj;
//       log.debug('callback %o', callback);
//       try {
//         testMessage = await chatHelper.test(message);
//       } catch (err) {
//         callback(false);
//         return errorHandler(err);
//       }
//       log.debug('message tmpEvent %o', testMessage);
//       emit('tmpEvent', testMessage);
//       // .subscribe((result) => {
//       //   console.log('tmpEvent ', result);
//       // },
//       // (error) => {
//       //   console.log('not delivered ', error);
//       // },
//       // () => {
//       //   // console.log('complete');
//       // });
//     });

// // socket.on('tmpEvent', function(data, callback) {
// //   const success = data;
// //   if (success) {
// //     socket.emit('tmpEvent', success);
// //     callback(success);
// //   } else {
// //     socket.emit('tmpEvent', success);
// //     callback(success);
// //   }
// // });


// on('guestName').subscribe(async (data) => {
//   // casual (guest) user connected and called his name
//   socket.request.payload.user.name = data;
//   socket.emit('message', 'Hello ' + socket.request.payload.user.name);
//   let connectedManagers;
//   try {
//     connectedManagers = await chatHelper.getConnectedManagers(io);
//   } catch (err) {
//     return new SocketError(err);
//   }
//   // emit to casual (guest) user - updated managers list
//   socket.emit('activeManagers', connectedManagers);
// });

// on('disconnect').subscribe(async (reason) => {
//   try {
//     connectedManagers = await chatHelper.getConnectedManagers(io);
//   } catch (err) {
//     return new SocketError(err);
//   }
//   // emit to all - updated managers list
//   io.emit('activeManagers', connectedManagers);

//   log.debug('This socket ' + socket.id + ' lost connection - reason: ' + reason);
// });

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
