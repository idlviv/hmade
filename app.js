const express = require('express');
const compression = require('compression');
const path = require('path');

// const cors = require('./server/config/cors');
const logger = require('morgan');
const log = require('./server/config/winston')(module);

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

app.use(compression());

// app.use(logger('tiny'));
// app.use(logger('dev'));


app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// config session
// app.use(require('./server/config/session').sessionCookie);

// app.use(passport.initialize());
// app.use(passport.session());

// // const cors = require('cors');
// const csrf = require('csurf');

// // check cookie, add req.csrfToken(),
// app.use(csrf({cookie: true}));

// initializing userman
const { userManInit, UserRouter, CatalogRouter, DbRouter } = require('./server/config/user-man');
app.use(userManInit());

// chat controller
// app.use(require('./server/controllers/chatController'));

// view engine setup
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'pug');

// redirect www to non www
app.use((req, res, next) => {
  const host = req.get('Host');
  if (host === 'www.hmade.work') {
    return res.redirect(301, 'https://hmade.work/' + req.originalUrl);
  }
  return next();
});

const router = express.Router();

const index = require('./server/routes');
const routes = require('./server/routes/routes');
const userRouter = new UserRouter(router);
const catalogRouter = new CatalogRouter(router);
const dbRouter = new DbRouter(router);

/**
 * all apis, api/404 will be handled here
 */
app.use('/api', userRouter.routes());
app.use('/api', catalogRouter.routes());
app.use('/api/db', dbRouter.routes());
app.use('/api', routes);

/**
 * all not-apis, 404 will be handled at frontend
 */
app.use('/', index);

app.use('*', function(req, res) {
  res.redirect('/');
});

const errorHandler = require('./server/errors/errorHandler');

app.use(errorHandler);

module.exports = app;
