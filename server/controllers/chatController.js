const log = require('../config/winston')(module);
const util = require('util');

module.exports = function(server) {
  io = require('socket.io').listen(server);
  io.sockets.on('connection', function(socket) {

    log.debug('socket connected %o', socket.handshake);
    // socket.emit('messageFromServer', {message: 'world'});
    socket.on('messageToServer', (data) => {
      data.message = 'server response: ' + data.message;
      socket.emit('messageFromServer', data);
    });
  }
  );
};