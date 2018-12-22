/**
 * server errors 500..
 *
 * @param {object|null} err
 * @param {string|null} err.message
 * @param {number|null} err.status
 * @param {number|string|null} err.code
 * @constructor
 */
function ServerError(err) {
  Error.call(this);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, ServerError);
  } else {
    this.stack = new Error().stack;
  }
  this.message = err && err.message ? err.message : 'Internal Server Error';
  this.status = err && err.status ? err.status : 500;
  this.code = err && err.code ? err.code : 0;
  this.name = 'ServerError';
}

ServerError.prototype = Object.create(Error.prototype);
ServerError.prototype.constructor = Error;

module.exports = ServerError;

//    messages
// noSuchUser (wrong email, _id, login) => clientError - 403 Forbidden
// wrongCredentials (wrong code, password) => clientError - 403 Forbidden
// maxTries (reached max of tries) => clientError - 403 Forbidden
// recaptchaErr () => clientError - 403 Forbidden
// bc (Bestcrypt errors) - 500 Internal Server Error
// notAuthorized (don't have permission) => clientError - 401 Unauthorized
