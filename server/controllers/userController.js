const log = require('../config/winston')(module);
const UserModel = require('../models/userModel');
const ResObj = require('../libs/responseObject');
const DbError = require('../errors/dbError');
const ApplicationError = require('../errors/applicationError');
const ClientError = require('../errors/clientError');
const util = require('util');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');
// let nodemailer = require('nodemailer');
const transporter = require('../config/mailgun');

const passwordResetCheckEmail = function(req, res, next) {
  let email = req.query.email;
  UserModel.findOne({email: email})
      .then((user) => {
        if (!user) {
          return next(new ApplicationError('noSuchuser', 403));
        }

        // const code = Math.floor(Math.random() * (100000 - 0)) + 0;
        const code = Math.floor(Math.random() * (100000)) + '';
        bcrypt.hash(code, 10)
            .then((hash) => {
              UserModel.update({_id: user._id}, {$set: {code: hash, codeTries: 1}})
                  .then((result) => {
                    if (result.ok !== 1) {
                      next(new DbError());
                    }

                    const mailOptions = {
                      from: 'grabo <postmaster@sandbox4d505533524a4360b5506928e2ed0726.mailgun.org>',
                      to: email,
                      subject: 'Зміна пароля, код підтвердження',
                      text: 'Ваш код підтвердження' + code,
                      html: '<b>Ваш код підтвердження </b>' + code,
                    };

                    transporter.sendMail(mailOptions, (err, info) => {
                      if (err) {
                        return next(new ApplicationError(err.message, err.status));
                      }
                      const sub = {_id: user._id};
                      const codeToken = _createJWTToken('JWT ', sub, 300, 'JWT_SECRET_CODE');
                      return res.status(200).json(new ResObj(true, 'На Вашу пошту відправлено листа', codeToken));
                    });
                  })
                  .catch(new ApplicationError('bc', 500));
            })
            .catch((err) => next(new ApplicationError(err.message, err.status)));
      })
      .catch((err) => next(new ApplicationError(err.message, err.status)));
};

const passwordResetCheckCode = function(req, res, next) {
  let user = {};
  Object.assign(user, req.user._doc);

  let code = req.query.code;
  UserModel.findOne({_id: user._id})
      .then((user) => {
        if (!user) {
          return next(new ApplicationError('noSuchuser', 403));
        }
        if (user.isCodeLocked) {
          return next(new ApplicationError('maxTries', 401));
        }

        bcrypt.compare(code, user.code)
            .then((passwordMatched) => {
              if (!passwordMatched) {
                UserModel.updateOne(
                    {_id: user._id},
                    {$inc: {'codeTries': 1}},
                    {upsert: true}
                )
                    .then((result) => {})
                    .catch((err) => console.log('err', err));

                return next(new ApplicationError('wrongCredentials', 401));
              }
              const sub = {_id: user._id};
              const changePasswordToken = _createJWTToken('JWT ', sub, 300, 'JWT_SECRET_CHANGE_PASSWORD');
              return res.status(200).json(new ResObj(true, 'Код введено вірно', changePasswordToken));
            })
            .catch((err) => next(new ApplicationError('bc', 500)));
      })
      .catch((err) => next(new ApplicationError(err.message, err.status)));
};

/**
 *
 * @param {string} _id - users _id
 * @param {object} modificationRequest
 * @param {string} modificationRequest.name - key
 * @param {string} modificationRequest.value - value
 * @return {Promise}
 */
const updateUserField = function(_id, modificationRequest) {
  return new Promise(function(resolve, reject) {
    UserModel.updateOne({_id},
        {$set: {[modificationRequest.name]: modificationRequest.value}})
        .then(
            (result) => {
              if (result.ok !== 1) {
                reject(new ApplicationError('Не вдалося внести зміни', 400));
              }
              resolve(new ResObj(true, 'Зміни внесено'));
            },
            (err) => reject(new DbError(err.message, err.code))
        );
  });
};

const updateUserFields = function(_id, modificationRequestObject) {
  return new Promise(function(resolve, reject) {
    UserModel.updateOne({_id},
        {$set: modificationRequestObject})
        .then(
            (result) => {
              if (result.ok !== 1) {
                reject(new ApplicationError('Не вдалося внести зміни', 400));
              }
              resolve(new ResObj(true, 'Зміни внесено'));
            },
            (err) => reject(new DbError(err.message, err.code))
        );
  });
};

const passwordReset = function(req, res, next) {
  let user = {};
  Object.assign(user, req.user._doc);
  // console.log('req.query.password', req.query.password);
  const password = req.query.password;
  let modificationRequest = {
    name: 'password',
    value: password,
  };
  bcrypt.hash(modificationRequest.value, 10)
      .then(
          (hash) => {
            modificationRequest.value = hash;
            // set new password
            updateUserField(user._id, modificationRequest)
                .then((result) => {
                  // clear code field
                  return updateUserField(user._id, {name: 'code', value: 'null'});
                })
                .then((result) => {
                  // login modified user
                  const sub = {
                    _id: user._id,
                    role: user.role,
                    login: user.login,
                  };
                  const token = _createJWTToken('JWT ', sub, 604800, 'JWT_SECRET');
                  return res.status(200).json(new ResObj(true, 'Пароль змінено. Вхід виконано', token));
                })
                .catch((err) => new ApplicationError(err.message, err.status));
          },
          (err) => next(new ApplicationError(err.message, err.status, err.code))
      );
};


const userEmailVerificationReceive = function(req, res, next) {
  let user = {};
  Object.assign(user, req.user._doc);
  UserModel.findOne({_id: user._id})
      .then((result) => {
        if (!result._id) {
          res.redirect(req.protocol + '://' + req.get('host'));
        } else if (result.email !== user.email) {
          res.redirect(req.protocol + '://' + req.get('host'));
        } else {
          UserModel.update({_id: user._id},
              {$set: {'role': 'user'}})
              .then(
                  (result) => {
                    if (result.ok !== 1) {
                      res.redirect(req.protocol + '://' + req.get('host'));
                      // return new ApplicationError('Не вдалося внести зміни', 400);
                      log.debug('!1', result);
                    }
                    res.redirect(req.protocol + '://' + req.get('host') + '/user/profile');
                    // return new ResObj(true, 'Зміни внесено');
                    log.debug('ok', result);
                  },
                  (err) => {
                    log.debug('err', err);
                    res.redirect(req.protocol + '://' + req.get('host'));
                  }
              );
        }
      }
      );
};

const userEmailVerificationSend = function(req, res, next) {
  let user = {};
  Object.assign(user, req.user._doc);
  const date = Math.floor(Date.now() / 1000); // in seconds
  const token = jwt.sign(
      {
        sub: {
          _id: user._id,
          email: user.email,
        },
        iat: date,
        exp: date + (60 * 60),
      },
      config.get('JWT_EMAIL')
  );

  const url = req.protocol + '://' + req.get('host') +
    '/api/user/email-verification?token=' + token;
  const email = user.email;

  let mailOptions = {
    from: 'Hmade <postmaster@sandbox4d505533524a4360b5506928e2ed0726.mailgun.org>', // FIXME: change email credentials
    to: email,
    subject: 'Підтвердіть пошту',
    text: 'Будь ласка, перейдіть за посиланням ' + url,
    html: '<b>Будь ласка, перейдіть за посиланням </b>' + url,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return next(new ApplicationError(err.message, err.status));
    }
    return res.status(200).json(new ResObj(true, 'На Вашу пошту відправлено листа'));
  });
};

const userEdit = function(req, res, next) {
  let moderator = {};
  let modificationRequest = {};

  Object.assign(moderator, req.user._doc);
  Object.assign(modificationRequest, req.body);

  comparePassword(moderator._id, modificationRequest.password)
      .then(() => {
        if (modificationRequest.name === 'password') {
          bcrypt.hash(modificationRequest.value, 10)
              .then(
                  (hash) => {
                    modificationRequest.value = hash;
                    updateUserField(moderator._id, modificationRequest)
                        .then(
                            (result) => res.status(200).json(result),
                            (err) => next(err)
                        );
                  },
                  (err) => next(new ApplicationError(err.message, err.status, err.code))
              );
        } else if (modificationRequest.name === 'email') {
          const modificationRequestObject = {
            email: modificationRequest.value,
            role: 'guest',
          };
          updateUserFields(moderator._id, modificationRequestObject)
              .then(
                  (result) => res.status(200).json(result),
                  (err) => next(err)
              );
        } else {
          updateUserField(moderator._id, modificationRequest)
              .then(
                  (result) => res.status(200).json(result),
                  (err) => next(err)
              );
        }
      },
      (err) => next(err)
      );
};

/**
 * if password match resolves promise
 *
 * @param _id
 * @param passwordCandidate
 * @return {Promise}
 */
function comparePassword(_id, passwordCandidate) {
  return new Promise(function(resolve, reject) {
    UserModel.findOne({_id})
        .then(
            (user) => {
              if (!user) {
                reject(new ApplicationError('Користувача не знайдено', 401));
              }
              bcrypt.compare(passwordCandidate, user.password)
                  .then(
                      (passwordMatched) => {
                        if (!passwordMatched) {
                          reject(new ApplicationError('Невірний пароль', 401));
                        }
                        resolve();
                      },
                      (err) => {
                        reject(new ApplicationError('Помилка перевірки пароля', 401));
                      }
                  );
            },
            (err) => reject(new DbError(err.message, err.code))
        );
  });
}


/**
 *
 * @param {string} prefix - prefix for token
 * @param {object} sub - subject payload
 * @param {number} expire - seconds
 * @param {string} secret - object key from config
 * @return {string}
 */
const _createJWTToken = function(prefix, sub, expire, secret) {
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
 * check email uniqueness
 *
 * @param {string} email
 * @return {Promise}
 */
function isEmailUnique(email) {
  return new Promise((resolve, reject) => {
    UserModel.find({email})
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

const userProfile = function(req, res, next) {
  // let user = {};
  // Object.assign(user, req.user._doc);
  // delete user.password;
  // console.log('user', req.user);
  // console.log('user._doc', req.user._doc);


  let user = {
    login: req.user._doc.login,
    avatar: req.user._doc.avatar,
    ban: req.user._doc.ban,
    name: req.user._doc.name,
    surname: req.user._doc.surname,
    role: req.user._doc.role,
    email: req.user._doc.email,
  };
  return res.status(200).json(new ResObj(true, 'auth', user));
};

/** Session
 * user logout
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @return {string}
 */
const userLogout = function(req, res, next) {
  log.debug('logout');
  req.logout();
  return res.status(200).json('Logged out');
};

/** Session
 * Returns basic user credential after successful login (passport local)
 * Signed by JWT
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @return {*}
 */
const userLogin = function(req, res, next) {
  if (req.user) {
    const sub = {
      _id: req.user._doc._id,
      login: req.user._doc.login,
      name: req.user._doc.name,
      surname: req.user._doc.surname,
      avatar: req.user._doc.avatar,
      provider: req.user._doc.provider,
      role: req.user._doc.role,
    };
    const token = _createJWTToken('', sub, 604800, 'JWT_SECRET');
    return res.status(200).json(token);
  } else {
    return next(new ApplicationError());
  }
};

const userGoogleSignin = function(req, res, next) {
  log.debug('google redirect');
  const sub = {
    _id: req.user._doc._id,
    login: req.user._doc.login,
    name: req.user._doc.name,
    surname: req.user._doc.surname,
    avatar: req.user._doc.avatar,
    provider: req.user._doc.provider,
    role: req.user._doc.role,
  };
  const token = _createJWTToken('', sub, 604800, 'JWT_SECRET');
  res.redirect('/user/redirected-from-oauth/' + token);
};

/** Session
 * Check users authenticity to activate routes on frontend (canActivate)
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @return {boolean}
 */
const userCheckAuthenticity = function(req, res, next) {
  let roleFromSession;
  if (req.user) {
    roleFromSession = req.user._doc.role || 'casual';
  } else {
    roleFromSession = 'casual';
  }
  const requiredRoleForAuthentication = req.query.role;

  const permissions = config.get('permissions');

  if (permissions[roleFromSession].indexOf(requiredRoleForAuthentication) >= 0) {
    return res.status(200).json(true);
  } else {
    return res.status(200).json(false);
  }
};


const userCreate = function(req, res, next) {
  let user = {};
  Object.assign(user, req.body);

  isEmailUnique(user.email)
      .then((result) => isLoginUnique(user.login))
      .then((result) => bcrypt.hash(req.body.password, 10))
      .then((hash) => {
        user.password = hash;
        user.role = 'guest';
        user.provider = 'native';
        user.createdAt = Date.now();
        const userModel = new UserModel(user);
        // create new user
        return userModel.save();
      },
      // redirect to error handler
      (err) => next(new ApplicationError(err.message, err.status, err.code))
      )
      .then((result) => {
        res.status(200).json();
        // next();
      }
      )
      // .then(
      //     (result) => {
      //       // login new user
      //       UserModel.findOne({login: user.login})
      //           .then(
      //               (user) => {
      //                 if (!user) {
      //                   return next(new ApplicationError('Невірний логін', 401));
      //                 }
      //                 const sub = {
      //                   _id: user._id,
      //                   role: user.role,
      //                   login: user.login,
      //                   avatar: config.get('defaultAvatar'),
      //                 };
      //                 const token = _createJWTToken('JWT ', sub, 604800, 'JWT_SECRET');
      //                 return res.status(200).json(new ResObj(true, 'Користувач створений. Вхід виконано', token));
      //               },
      //               (err) => next(new DbError(err.message, err.code))
      //           );
      //     },
      //     (err) =>
      //     // redirect to error handler
      //       next(new DbError(err.message, err.code))
      // )
      .catch((err) => {
        log.debug('err', err);
      });
};

module.exports = {
  userCheckAuthenticity,
  userProfile,
  userLogin,
  userLogout,
  userCreate,
  userEdit,
  userEmailVerificationSend,
  userGoogleSignin,
  userEmailVerificationReceive,
  updateUserFields,
  updateUserField,
  passwordReset,
  passwordResetCheckCode,
  passwordResetCheckEmail,

  isEmailUnique,
  isLoginUnique,
  isLoginExists,
  isPasswordLocked,
  isPasswordMatched,
};
