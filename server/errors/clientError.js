/**
 * Client errors 400..
 *
 * @param {object|null} err
 * @param {string|null} err.message
 * @param {number|null} err.status
 * @param {number|string|null} err.code
 * @constructor
 */
function ClientError(err) {
  Error.call(this);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, ClientError);
  } else {
    this.stack = new Error().stack;
  }
  this.message = err && err.message ? err.message : 'Помилка у запиті до сервера';
  this.status = err && err.status ? err.status : 400;
  this.code = err && err.code ? err.code : 0;
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

