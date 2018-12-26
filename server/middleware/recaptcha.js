const rp = require('request-promise-native');
const config = require('../config');
const log = require('../config/winston')(module);
const ClientError = require('../errors/clientError');

module.exports = function(req, res, next) {
  let recaptcha = req.query.recaptcha;
  if (recaptcha === '' ||
    recaptcha === null ||
    recaptcha === undefined) {
    return next(new ClientError({message: 'Помилка коду recaptcha', status: 403, code: 'recaptchaErr'}));
  }
  const recaptchaSecret = config.get('RECAPTCHA_SECRET');
  const recaptchaURL = `https://www.google.com/recaptcha/api/siteverify?secret=
  ${recaptchaSecret}&response=${recaptcha}&
  remoteip=${req.connection.remoteAddress}`;

  rp(recaptchaURL)
      .then((result) => {
        result = JSON.parse(result);
        if (result.success === true) {
          return next();
        } else {
          return next(new ClientError({message: 'Помилка коду recaptcha', status: 403, code: 'recaptchaErr'}));
        }
      })
      .catch((err) => next(new ClientError({message: 'Помилка коду recaptcha', status: 403, code: 'recaptchaErr'})));
};
