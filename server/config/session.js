const log = require('../config/winston')(module);
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const config = require('./');
const mongoose = require('./mongoose');

const sessionStorage = new MongoStore({mongooseConnection: mongoose.connection});

const sessionCookie = function() {
  return session({
    key: config.get('sessionSid'),
    secret: config.get('SESSION_SECRET'),
    resave: false,
    saveUninitialized: true,
    cookie: {
      path: '/',
      httpOnly: true, // not reachable for js (XSS)
      // secure: config.get('NODE_ENV') === 'production',
      sameSite: 'Strict',
      maxAge: null, // never expires, but will be deleted after closing browser
    },
    store: sessionStorage,
  });
};

module.exports = {
  sessionStorage,
  sessionCookie,
};
