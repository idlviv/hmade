const log = require('../config/winston')(module);
const UserModel = require('../models/userModel');
const DbError = require('../errors/dbError');
const ApplicationError = require('../errors/applicationError');
const ClientError = require('../errors/clientError');
const bcrypt = require('bcryptjs');

/**
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
            reject(new ClientError({message: 'Цей email вже використовується', status: 422, code: 'uniqueConflict'}));
          }
        })
        .catch((err) => reject(new DbError()));
  });
}

/**
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
            reject(new ClientError({message: 'Цей логін вже використовується', status: 422, code: 'uniqueConflict'}));
          }
        })
        .catch((err) => reject(new DbError()));
  });
}

/**
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
            reject(new ClientError({message: 'Email не знайдено', status: 403, code: 'wrongCredentials'}));
          }
        })
        .catch((err) => reject(new DbError()));
  });
}

/**
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
            reject(new ClientError({message: 'Користувача не знайдено', status: 401}));
          }
        })
        .catch((err) => reject(new DbError()));
  });
}

/**
 * check locking after max tries to input wrong password
 *
 * @param {UserModel} userFromDb
 * @return {Promise<UserModel>}
 */
function isPasswordLocked(userFromDb) {
  return new Promise((resolve, reject) => {
    if (userFromDb.isPasswordLocked) {
      const estimatedTime = userFromDb.passwordLockUntil - Date.now();
      reject(new ClientError({
        message: `Вхід заблоковано, спробуйте через 
        ${Math.round(estimatedTime / 1000 / 60)} хвилин.`,
        status: 401,
      }));
    } else {
      resolve(userFromDb);
    }
  });
}

/**
 * compare password from request (candidate)
 * with password from db
 *
 * @param {*} userCandidate
 * @param {UserModel} userFromDb
 * @return {Promise<UserModel>}
 */
function isPasswordMatched(userCandidate, userFromDb) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(userCandidate.password, userFromDb._doc.password)
        .then((passwordMatched) => {
          if (passwordMatched) {
            resolve(userFromDb);
          } else {
            reject(new ClientError({message: 'Невірний пароль', status: 401, code: 'wrongCredentials'}));
          }
        })
        .catch((err) => reject(err));
  });
}

/**
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

    UserModel.updateOne({_id: user._id}, query)
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
  isEmailUnique,
  isLoginUnique,
  isEmailExists,
  isLoginExists,
  isPasswordLocked,
  isPasswordMatched,
  updatePasswordLockOptions,
};
