const log = require('../config/winston')(module);

module.exports = function(socket) {
  log.debug('socket connected');
  // socket.emit('messageFromServer', {message: 'world'});
  socket.on('messageToServer', (data) => {
    data.message = 'server response: ' + data.message;
    socket.emit('messageFromServer', data);
  });
};
