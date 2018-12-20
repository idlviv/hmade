const log = require('../config/winston')(module);
const UserModel = require('../models/userModel');
const DbError = require('../errors/dbError');
const ApplicationError = require('../errors/applicationError');
const ClientError = require('../errors/clientError');
const util = require('util');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');
// let nodemailer = require('nodemailer');
const transporter = require('../config/mailgun');

/** Session
 *  Create token
 *
 * @param {string} prefix - prefix for token
 * @param {object} sub - subject payload
 * @param {number} expire - seconds
 * @param {string} secret - object key from config
 * @return {string}
 */
const createJWTToken = function(prefix, sub, expire, secret) {
  const date = Math.floor(Date.now() / 1000); // in seconds
  return prefix + jwt.sign(
      {
        sub,
        iat: date,
        exp: date + (expire), // 60 секунд * 60 хвилин = 1 година * 24 год * 7 днів
      },
      config.get(secret)
  );
};

/** Session
 * check pair: email - provider uniqueness
 *
 * @param {string} email
 * @param {string} provider
 * @return {Promise}
 */
function isEmailUnique(email, provider) {
  return new Promise((resolve, reject) => {
    UserModel.find({email, provider})
        .then((result) => {
          if (!result.length) {
            resolve();
          } else {
            reject(new ClientError('Цей email вже використовується', 422));
          }
        })
        .catch((err) => reject(new DbError()));
  });
}

/** Session
 * check login uniqueness
 *
 * @param {string} login
 * @return {Promise}
 */
function isLoginUnique(login) {
  return new Promise((resolve, reject) => {
    UserModel.find({login})
        .then((result) => {
          if (!result.length) {
            resolve();
          } else {
            reject(new ClientError('Цей логін вже використовується', 422));
          }
        })
        .catch((err) => reject(new DbError()));
  });
}

/** Session
 * check pair: email-provider exists in db
 *
 * @param {string} email
 * @param {string} provider
 * @return {Promise<UserModel>}
 */
function isEmailExists(email, provider) {
  return new Promise((resolve, reject) => {
    UserModel.findOne({email, provider})
        .then((user) => {
          if (user) {
            resolve(user);
          } else {
            reject();
          }
        })
        .catch((err) => reject(new DbError()));
  });
}

/** Session
 * check login exists in db
 *
 * @param {string} login
 * @return {Promise<UserModel>}
 */
function isLoginExists(login) {
  return new Promise((resolve, reject) => {
    UserModel.findOne({login})
        .then((user) => {
          if (user) {
            resolve(user);
          } else {
            reject(new ClientError('Користувача не знайдено', 401));
          }
        })
        .catch((err) => reject(new DbError()));
  });
}

/** Session
 * check locking after max tries to input wrong password
 *
 * @param {UserModel} userFromDb
 * @return {Promise<UserModel>}
 */
function isPasswordLocked(userFromDb) {
  return new Promise((resolve, reject) => {
    if (userFromDb.isPasswordLocked) {
      let time = new Date(userFromDb.passwordLockUntil);
      reject(new ClientError(`Вхід заблоковано до ${time.toTimeString()}, досягнуто максимальну кількість спроб`, 401));
    } else {
      resolve(userFromDb);
    }
  });
}

/** Session
 * compare password from request (candidate)
 * with password from db
 *
 * @param {*} userCandidate
 * @param {UserModel} userFromDb
 * @return {Promise<UserModel>}
 */
function isPasswordMatched(userCandidate, userFromDb) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(userCandidate.password, userFromDb.password)
        .then((passwordMatched) => {
          if (passwordMatched) {
            resolve(userFromDb);
          } else {
            updatePasswordLockOptions(userFromDb)
                .then(
                    () => reject(new ClientError('Невірний пароль', 401)),
                    (err) => reject(new ClientError('Невірний пароль_', 401))
                );
          }
        })
        .catch((err) => reject(new ApplicationError()));
  });
}

/** Session
 * update user (password lock options) after wrong password input
 *
 * @param {UserModel} user
 * @return {Promise<UserModel>}
 */
function updatePasswordLockOptions(user) {
  return new Promise((resolve, reject) => {
    const dateNow = Date.now(); // in seconds
    let query;

    if ((dateNow - user.passwordLockUntil) > 600000) {
      query = {
        $set: {
          passwordTries: 1,
          passwordLockUntil: dateNow,
        },
      };
    } else if (user.passwordTries >= user.passwordLockTries) {
      query = {
        $set: {
          passwordTries: 1,
          passwordLockUntil: dateNow + 600000},
      };
    } else {
      query = {
        $inc: {passwordTries: 1},
        $set: {passwordLockUntil: dateNow},
      };
    }

    UserModel.update({_id: user._id}, query)
        .then((result)=>{
          if (result.ok !== 1) {
            reject(new DbError());
          }
          resolve(user);
        },
        (err) => reject(new DbError())
        );
  });
}

module.exports = {
  createJWTToken,
  isEmailUnique,
  isLoginUnique,
  isEmailExists,
  isLoginExists,
  isPasswordLocked,
  isPasswordMatched,
  updatePasswordLockOptions,
};
