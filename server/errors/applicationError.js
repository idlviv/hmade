/**
 * server errors
 *
 * @param {string} message
 * @param {number} status
 * @param {string | number} code
 * @constructor
 */
function ApplicationError(message, status, code) {
  Error.call(this);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, ApplicationError);
  } else {
    this.stack = new Error().stack;
  }
  this.message = message ? message : 'Internal Server Error';
  this.status = status || 500;
  this.code = code || 0;
  this.name = 'ApplicationError';
}

ApplicationError.prototype = Object.create(Error.prototype);
ApplicationError.prototype.constructor = Error;

module.exports = ApplicationError;

//    messages
// noSuchUser (wrong email, _id, login) => clientError - 403 Forbidden
// wrongCredentials (wrong code, password) => clientError - 403 Forbidden
// maxTries (reached max of tries) => clientError - 403 Forbidden
// recaptchaErr () => clientError - 403 Forbidden
// bc (Bestcrypt errors) - 500 Internal Server Error
// notAuthorized (don't have permission) => clientError - 401 Unauthorized

// 403 - обмежений доступ
// 401 - не авторизовано