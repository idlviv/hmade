// const createError = require('http-errors');
const cors = require('cors');
const express = require('express');
const compression = require('compression');
const path = require('path');
const passport = require('passport');
const csrf = require('csurf');
const csrfCookie = require('./server/config/csrf');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');

const index = require('./server/routes');
const routes = require('./server/routes/routes');

const ApplicationError = require('./server/errors/applicationError');
const errorHandler = require('./server/errors/errorHandler');

const util = require('util');

const app = express();

const log = require('./server/config/winston')(module);

app.use(compression());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// check cookie, add req.csrfToken(),
 // If the "cookie" option is not false, then this option does nothing.
app.use(csrf({cookie: true}));
// set cookie
app.use(csrfCookie);

app.use(passport.initialize());
// app.use(passport.session());
require('./server/config/passport')(passport);

// app.use(function(req, res, next) {
//   // Enabling CORS
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization');
//   next();
// });

// view engine setup
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'pug');

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')));

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
