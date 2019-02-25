require('newrelic');
const express = require('express');
const compression = require('compression');
const path = require('path');

const passport = require('passport');
// passport configuration
require('./server/config/passport')(passport);

// const cors = require('cors');
const csrf = require('csurf');
// config custom cookie for angular XSRF-TOKEN
const csrfCookie = require('./server/config/csrf');

// const cors = require('./server/config/cors');
const logger = require('morgan');
const log = require('./server/config/winston')(module);

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const mongoose = require('./server/config/mongoose');

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const index = require('./server/routes');
const routes = require('./server/routes/routes');
const config = require('./server/config');
const setUserCookie = require('./server/middleware/cookie').setUserCookie;

const ApplicationError = require('./server/errors/applicationError');
const errorHandler = require('./server/errors/errorHandler');

const app = express();

app.use(compression());

// app.use(logger('tiny'));
// app.use(logger('dev'));

// app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(session({
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
}));


// check cookie, add req.csrfToken(),
app.use(csrf({cookie: true}));
// set custom cookie for angular XSRF-TOKEN
app.use(csrfCookie);

app.use(passport.initialize());
app.use(passport.session());


app.use(setUserCookie);

// app.use((req, res, next) => {
//   log.debug('cookie', req.session);
//   next();
// });

// view engine setup
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'pug');

/**
 * all apis, api/404 will be handled there
 */

app.use('/api', routes);

/**
 * all not-apis, 404 will be handled at frontend
 */

app.use('/', index);

app.use('*', function(req, res) {
  res.redirect('/');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new ApplicationError(404, 'Помилковий запит');
  next(err);
});

app.use(errorHandler);

module.exports = app;
