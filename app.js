const express = require('express');
const compression = require('compression');
const path = require('path');
const config = require('./server/config');



// const cors = require('cors');
const csrf = require('csurf');
// config custom cookie for angular XSRF-TOKEN
const csrfCookie = require('./server/config/csrf');

// const cors = require('./server/config/cors');
const logger = require('morgan');
const log = require('./server/config/winston')(module);

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// const setUserCookie = require('./server/middleware/cookie').setUserCookie;


const app = express();

const { userController, UserRouter } = require('user-man');

app.use(compression());

// app.use(logger('tiny'));
// app.use(logger('dev'));

// app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// config session
app.use(require('./server/config/session').sessionCookie);

const passport = require('passport');

// passport configuration
require('./server/config/passport')(passport);

app.use(passport.initialize());
app.use(passport.session());

// check cookie, add req.csrfToken(),
app.use(csrf({cookie: true}));
// set custom cookie for angular XSRF-TOKEN
app.use(csrfCookie);

// app.use(function(req, res, next) {
//   // console.log('request.url', req.url);
//   if (req.session && req.session.passport && req.session.passport.user) {
//     log.debug('session user %o', req.session.id);
//   } else {
//     log.debug('session - not user %o', req.session.id);
//   } 
//   next();
// });

require('./server/config/user-man');

app.use(userController.setFrontendAuthCookie());
// app.use(cookie.setUserCookie({ JWTSecret: config.get('JWT_SECRET'), cookieName: 'hmade' }));

// app.use(require('./server/config/user-man'));

// chat controller
// app.use(require('./server/controllers/chatController'));

// app.use((req, res, next) => {
//   log.debug('cookie', req.session);
//   next();
// });

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
const clouidanary = require('./server/config/cloudinary');

const index = require('./server/routes');
const routes = require('./server/routes/routes');
const user = require('./server/routes/user');

const userRouter = new UserRouter(router, passport, clouidanary);
/**
 * all apis, api/404 will be handled there
 */
app.use('/api', userRouter.routes());
app.use('/api', user);
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
