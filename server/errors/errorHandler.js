const { ClientError, ServerError, DbError } = require('user-man');

const ApplicationError = require('./applicationError');
// const ClientError = require('./clientError');
// const ServerError = require('./serverError');
const log = require('../config/winston')(module);

module.exports = function(err, req, res, next) {
  // console.log('Error Handler ', err);



  if (err.code === 'EBADCSRFTOKEN') {
    return res.status(403).json('Оновіть сторінку, вийшов час очікування(CSRF)');
  }

  // handle db errors
  if (err instanceof DbError) {
    // duplicate index error
    if (err.code === 11000) {
      if (new RegExp(/login_1\b/).test(err.message)) {
        return res.status(422).json('Цей логін вже використовується');
        // return res.status(422).json(new ResObj(false, 'Цей логін вже використовується', err));
      } else if (new RegExp(/email_1\b/).test(err.message)) {

        return res.status(422).json('Цей email вже використовується');
        // return res.status(422).json(new ResObj(false, 'Цей email вже використовується', err));
      }
      return res.status(422).json('Помилка унікальності даних');
      // return res.status(422).json(new ResObj(false, 'Помилка унікальності даних', err));
    }

    // other db errors
    return res.status(err.status).send(err);
  }

  // custom application error
  if (err instanceof ApplicationError) {
    return res.status(err.status).json(err.message);
  }

  // custom client error
  if (err instanceof ClientError) {
    // console.log('clientError in err handler ', err);
    return res.status(err.status).send(err);
  }

  // custom server error
  if (err instanceof ServerError) {
    return res.status(err.status).json(err);
  }
  console.log('err', err);

  // all other errors
  return res.status(500).json('Помилка сервера');
  // return res.status(500).json(new ResObj(false, 'Помилка сервера', err));

  // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};
  // // render the error page
  // res.status(err.status || 500);
  // res.render('error');
};
