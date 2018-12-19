/**
 * Client errors 400..
 *
 * @param {string} message
 * @param {number} status
 * @param {string | number} code
 * @constructor
 */
function ClientError(message, status, code) {
  Error.call(this);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, ClientError);
  } else {
    this.stack = new Error().stack;
  }
  this.message = message ? message : 'Помилка у запиті до сервера';
  this.status = status || 400;
  this.code = code || 0;
  this.name = 'ClientError';
}

ClientError.prototype = Object.create(Error.prototype);
ClientError.prototype.constructor = Error;

module.exports = ClientError;

//    messages
// uniqueConflict (login or email already exists) - 422 Unprocessable Entity
// noSuchUser (wrong email, _id, login) => clientError - 401 Unauthorized
// wrongCredentials (wrong code, password) => clientError - 403 Forbidden
// maxTries (reached max of tries) => clientError - 403 Forbidden
// recaptchaErr () => clientError - 403 Forbidden
// bc (Bestcrypt errors)
// notAuthorized (don't have permission) => clientError - 401 Unauthorized
