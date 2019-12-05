const mongoose = require('mongoose');
const config = require('../config');
const log = require('../config/winston')(module);

// class Mongoose {
//   constructor(url, options) {
//     this._mongoose = mongoose;
//     this.mongoose.connect(url, options);
//   }

//   get get() {
//     return this._mongoose;
//   }

//   createModel(name, schemaObject, virtuals) {
//     const UserSchema = new Schema(schemaObject);
//     // if (virtuals) {
//     //   virtuals.forEach((virt) => {

//     //   });
//     // }
//     return this._mongoose.model(name, UserSchema);
//   }
// }

const options = {
  autoReconnect: true,
  autoIndex: process.env.NODE_ENV !== 'production',
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 50, // Maintain up to 50 socket connections
  wtimeout: 2500,
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

const url = config.get('DB_URL');

// module.exports = new Mongoose(url, options);


mongoose.connect(url, options)
    .then(() => log.verbose('Connected to db '),
        (err) => {
          log.error('Error ' + err);
          process.exit(1);
        }
    );
// mongoose.set('useCreateIndex', true);


// mongoose.connection.on('error', function(err) {
//   console.log('on error', err);
// });
// mongoose.connection.on('close', () => { console.log('-> lost connection'); });
// mongoose.connection.once('open', function() {
//   console.log("Connection to db established.");
// });

module.exports = mongoose;
