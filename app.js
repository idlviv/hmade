const express = require('express');
const compression = require('compression');
const path = require('path');



// const cors = require('./server/config/cors');
const logger = require('morgan');
const log = require('./server/config/winston')(module);

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

// init with curent project options
require('./server/config/user-man');

const { userController, UserRouter, libs, sharedMiddleware } = require('user-man');
const passport = libs.passport;

// get passport
// const passport = require('user-man').config.passport;

app.use(compression());

// app.use(logger('tiny'));
// app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// config session
app.use(require('./server/config/session').sessionCookie);

app.use(passport.initialize());
app.use(passport.session());

// const cors = require('cors');
const csrf = require('csurf');
// check cookie, add req.csrfToken(),
app.use(csrf({cookie: true}));

// set custom cookie for angular XSRF-TOKEN
app.use(sharedMiddleware.setCSRFCookie());

// set frontend authentication cookie
app.use(userController.setFrontendAuthCookie());

// chat controller
// app.use(require('./server/controllers/chatController'));

// view engine setup
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'pug');

// redirect www to non www
app.use((req, res, next) => {
  let host = req.get('Host');
  if (host === 'www.hmade.work') {
    return res.redirect(301, 'https://hmade.work/' + req.originalUrl);
  }
  return next();
});

const router = express.Router();
// const clouidanary = require('./server/config/cloudinary');

const index = require('./server/routes');
const routes = require('./server/routes/routes');

const userRouter = new UserRouter(router);
/**
 * all apis, api/404 will be handled there
 */
app.use('/api', userRouter.routes());
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
//   const err = new ClientError({ message: 'Такої сторінки не існує ', status: 404});
//   next(err);
// });
const errorHandler = require('./server/errors/errorHandler');

app.use(errorHandler);

module.exports = app;
