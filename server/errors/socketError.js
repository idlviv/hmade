/**
 * Client errors 400..
 *
 * @param {object|null} err
 * @param {string|null} err.message
 * @param {number|null} err.status
 * @param {number|string|null} err.code
 * @constructor
 */
function SocketError(err) {
  Error.call(this);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, SocketError);
  } else {
    this.stack = new Error().stack;
  }
  this.message = err && err.message ? err.message : 'Помилка сокета';
  this.status = err && err.status ? err.status : 500;
  this.code = err && err.code ? err.code : 0;
  this.name = 'SocketError';
}

SocketError.prototype = Object.create(Error.prototype);
SocketError.prototype.constructor = Error;

module.exports = SocketError;

//    messages
// notDelivered - повідомлення не доставлено
// timeout - not delivered, timeout error
// rejected - rejected from client side
