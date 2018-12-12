// const createError = require('http-errors');
const cors = require('cors');
const express = require('express');
const compression = require('compression');
const path = require('path');
const passport = require('passport');
const csrf = require('csurf');
const csrfCookie = require('./server/config/csrf');
const logger = require('morgan');

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const session =require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('./server/config/mongoose');
// const favicon = require('express-favicon');

const index = require('./server/routes');
const routes = require('./server/routes/routes');
const config = require('./server/config');

const ApplicationError = require('./server/errors/applicationError');
const errorHandler = require('./server/errors/errorHandler');

const app = express();

const log = require('./server/config/winston')(module);

app.use(compression());

app.use(logger('dev'));

// app.use(favicon());
app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(cookieParser());



app.use(session({
  key: 'hmade.sid',
  secret: config.get('SESSION_SECRET'),
  resave: false,
  saveUninitialized: true,
  cookie: {
    path: '/',
    httpOnly: true, // not reachable for js (XSS)
    // secure: true,
    sameSite: 'Strict',
    maxAge: null, // never expires, but will be deketed after closing browser
  },
  store: new MongoStore({mongooseConnection: mongoose.connection}),
}));

// check cookie, add req.csrfToken(),
// If the "cookie" option is not false, then this option does nothing.
app.use(csrf({
  cookie: false,
}));
// set cookie
// app.use(csrfCookie);

app.use(passport.initialize());
app.use(passport.session());

require('./server/config/passport')(passport);

app.use(function(req, res, next) {
  log.debug('headers', req.headers);
  log.debug('req.csrfToken()', req.csrfToken());
  req.session.number += 1;
  console.log('ses', req.session);
  next();
});


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


// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new ApplicationError(404, 'Помилковий запит');
  next(err);
});

app.use(errorHandler);

module.exports = app;
