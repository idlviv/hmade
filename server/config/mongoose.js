const mongoose = require('mongoose');
const config = require('../config');
const log = require('../config/winston')(module);

const options = {
  autoReconnect: true,
  autoIndex: process.env.NODE_ENV !== 'production',
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  // poolSize: 10,
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0,
  useNewUrlParser: true,
  poolSize: 50, // Maintain up to 50 socket connections
  wtimeout: 2500,
};

const url = config.get('DB_URL');

mongoose.connect(url, options)
  .then(
    () => log.verbose('Connected to db '),
    (err) => {
      log.error('Error ' + err);
      process.exit(1);
    }
  );


mongoose.set('useCreateIndex', true);
// mongoose.connection.on('error', function(err) {
//   console.log('on error', err);
// });
// mongoose.connection.on('close', () => { console.log('-> lost connection'); });
// mongoose.connection.once('open', function() {
//   console.log("Connection to db established.");
// });

module.exports = mongoose;
