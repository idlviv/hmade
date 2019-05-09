const log = require('../config/winston')(module);
const MongoStore = require('connect-mongo')(session);
const config = require('./server/config');
const mongoose = require('./server/config/mongoose');

module.exports = session({
  key: 'hmade.sid',
  secret: config.get('SESSION_SECRET'),
  resave: false,
  saveUninitialized: false,
  cookie: {
    path: '/',
    httpOnly: true, // not reachable for js (XSS)
    // secure: config.get('NODE_ENV') === 'production',
    sameSite: 'Strict',
    maxAge: null, // never expires, but will be deleted after closing browser
  },
  store: new MongoStore({mongooseConnection: mongoose.connection}),
});
