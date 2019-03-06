const log = require('../config/winston')(module);
const UserModel = require('../models/userModel');
const ResObj = require('../libs/responseObject');
const DbError = require('../errors/dbError');
const ApplicationError = require('../errors/applicationError');
const ServerError = require('../errors/serverError');
const ClientError = require('../errors/clientError');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');
const transporter = require('../config/mailgun');
const userHelper = require('../helpers/userHelper');
const sharedHelper = require('../helpers/sharedHelper');
const setUserCookie = require('../helpers/cookieHelper').setUserCookie;

/**
 * First step to reset password
 * Send reset code on email and write its hash in db
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const passwordResetCheckEmail = function(req, res, next) {
  let email = req.query.email;
  let user;
  let code;

  userHelper.isEmailExists(email, 'local')
      .then((userFromDb) => {
        code = Math.floor(Math.random() * (100000)) + '';
        user = userFromDb;
        return bcrypt.hash(code, 10);
      })
      .then((hash) => userHelper.updateDocument({_id: user._doc._id}, {$set: {code: hash, codeTries: 1}}))
      .then((result) => {
        const mailOptions = {
          from: 'HandMADE <postmaster@hmade.work>',
          to: email,
          subject: 'Зміна пароля, код підтвердження',
          text: 'Ваш код підтвердження: ' + code,
          html: '<b>Ваш код підтвердження: </b>' + code,
        };
        return sharedHelper.sendMail(mailOptions);
      })
      .then((info) => {
        const sub = {_id: user._id};
        // token to identify user
        const codeToken = sharedHelper.createJWT('JWT ', sub, 300, 'JWT_SECRET_CODE');
        return res.status(200).json(codeToken);
      })
      .catch((err) => next(err));
};

/**
 * Second step to reset password
 * Compare code from email with one in db
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const passwordResetCheckCode = function(req, res, next) {
  let code = req.query.code;
  let user;
  UserModel.findOne({_id: req.user._doc._id})
      .then((userFromDb) => {
        user = userFromDb;
        if (!userFromDb) {
          throw new ClientError({status: 401, code: 'noSuchuser'});
        }
        if (userFromDb.isCodeLocked) {
          throw new ClientError({message: 'Кількість спроб вичерпано', status: 403, code: 'maxTries'});
        }
        // if code doesn't match then throw error with code 'wrongCredentials' here
        return userHelper.isPasswordMatched(code, userFromDb._doc.code, userFromDb);
      })
      .then((userFromDb) => {
        const sub = {_id: userFromDb._doc._id};
        // token to identify user
        const changePasswordToken = sharedHelper.createJWT('JWT ', sub, 300, 'JWT_SECRET_CHANGE_PASSWORD');
        return res.status(200).json(changePasswordToken);
      })
      .catch((err) => {
        if (err.code === 'wrongCredentials') {
          userHelper.updatePasswordResetOptions(user)
              .then(() => next(err));
        } else {
          next(err);
        }
      });
};

/**
 * Third step to reset password
 * Middleware which invokes 'next()' to login this user
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const passwordReset = function(req, res, next) {
  let user = {};
  Object.assign(user, req.user._doc);
  const password = req.query.password;
  bcrypt.hash(password, 10)
      .then((hash) => userHelper.updateDocument(
          {_id: user._id},
          {$set: {
            password: hash,
            code: null,
          }}
      ))
      .then((result) => {
        req.body.login = user.login;
        next();
      })
      .catch((err) => next(err));
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
          UserModel.updateOne({_id: user._id},
              {$set: {'role': 'user'}})
              .then(
                  (result) => {
                    if (result.ok !== 1) {
                      res.redirect(req.protocol + '://' + req.get('host'));
                      // return new ApplicationError('Не вдалося внести зміни', 400);
                      log.debug('!1', result);
                    }

                    // update token with changes (local login)
                    const sub = {
                      _id: req.user._doc._id,
                      login: req.user._doc.login,
                      name: req.user._doc.name,
                      surname: req.user._doc.surname,
                      avatar: req.user._doc.avatar,
                      provider: req.user._doc.provider,
                      role: 'user',
                    };
                    const token = sharedHelper.createJWT('', sub, 60, 'JWT_SECRET');
                    res.redirect(req.protocol + '://' + req.get('host') + '/user/redirection-with-token/' + token);
                  },
                  (err) => {
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
    from: 'Hmade <noreply@hmade.work>',
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

/** Edit user fields without password confirmation
 *
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @return {*}
 */
const userEditUnsecure = function(req, res, next) {
  let user = {};
  let modificationRequest = {};

  Object.assign(user, req.user._doc);
  Object.assign(modificationRequest, req.body);
  if (modificationRequest.name === 'commentsReadedTill') {
    userHelper.updateDocument(
        {_id: user._id},
        {$set: {
          [modificationRequest.name]: modificationRequest.value,
        }})
        .then((result) => res.status(200).json('Зміни внесено'))
        .catch((err) => next(err));
  } else {
    return next(new ClientError({message: 'Помилка авторизації', status: 401}));
  }
};

/** Edit user fields with password confirmation
 *
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const userEdit = function(req, res, next) {
  let user = {};
  let modificationRequest = {};

  Object.assign(user, req.user._doc);
  Object.assign(modificationRequest, req.body);

  userHelper.isPasswordMatched(modificationRequest.password, user.password, user)
      .then((user) => {
        if (modificationRequest.name === 'password') {
          return bcrypt.hash(modificationRequest.value, 10)
              .then((hash) => userHelper.updateDocument(
                  {_id: user._id},
                  {$set: {
                    password: hash,
                    code: null,
                  }}
              ));
        } else {
          return userHelper.updateDocument(
              {_id: user._id},
              {$set: {
                [modificationRequest.name]: modificationRequest.value,
              }}
          );
        }
      })
      .then((result) => res.status(200).json('Зміни внесено'))
      .catch((err) => next(err));
};

/**
 * Return users credentials
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @return {UserModel}
 */
const userProfile = function(req, res, next) {
  let user = {
    login: req.user._doc.login,
    avatar: req.user._doc.avatar,
    ban: req.user._doc.ban,
    name: req.user._doc.name,
    surname: req.user._doc.surname,
    role: req.user._doc.role,
    email: req.user._doc.email,
  };
  return res.status(200).json(user);
};

/**
 * user logout from session
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @return {*}
 */
const userLogout = function(req, res, next) {
  req.logout();
  setUserCookie(null)(req, res, next)
      .then(() => {
        return res.status(200).json('Logged out');
      });
};

/**
 * After successful login  (passport local)
 * or create user (passport localWithoutPassword)
 * Returns basic user credentials, signed by JWT
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @return {*}
 */
const userLogin = function(req, res, next) {
  if (req.user) {
    const user = {
      _id: req.user._doc._id,
      login: req.user._doc.login,
      name: req.user._doc.name,
      surname: req.user._doc.surname,
      avatar: req.user._doc.avatar,
      provider: req.user._doc.provider,
      role: req.user._doc.role,

    };
    console.log('login');
    setUserCookie(user)(req, res, next)
        .then(() => {
          // const token = sharedHelper.createJWT('', user, 60, 'JWT_SECRET');
          return res.status(200).json('logged in');
        });
  } else {
    return next(new ClientError({message: 'Помилка авторизації', status: 401}));
  }
};

const syncTokenToSession = function(req, res, next) {
  if (req.isAuthenticated()) {
    const sub = {
      _id: req.user._doc._id,
      login: req.user._doc.login,
      name: req.user._doc.name,
      surname: req.user._doc.surname,
      avatar: req.user._doc.avatar,
      provider: req.user._doc.provider,
      role: req.user._doc.role,
    };
    const token = sharedHelper.createJWT('', sub, 60, 'JWT_SECRET'); // 604800
    return res.status(200).json(token);
  } else {
    res.status(200).json('');
  }
};

/**
 * After successful google social signin
 * Returns basic user credentials, signed by JWT
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const userGoogleSignin = function(req, res, next) {
  const sub = {
    _id: req.user._doc._id,
    login: req.user._doc.login,
    name: req.user._doc.name,
    surname: req.user._doc.surname,
    avatar: req.user._doc.avatar,
    provider: req.user._doc.provider,
    role: req.user._doc.role,
  };
  const token = sharedHelper.createJWT('', sub, 60, 'JWT_SECRET');
  res.redirect('/user/redirection-with-token/' + token);
};

/**
 * Check users authorization to activate routes on frontend (canActivate)
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @return {boolean}
 */
const userCheckAuthorization = function(req, res, next) {
  let roleFromSession;

  // if session active set token to frontend for local login
  let token;
  if (req.user) {
    roleFromSession = req.user._doc.role || 'casual';
    const sub = {
      _id: req.user._doc._id,
      login: req.user._doc.login,
      name: req.user._doc.name,
      surname: req.user._doc.surname,
      avatar: req.user._doc.avatar,
      provider: req.user._doc.provider,
      role: req.user._doc.role,
    };
    token = sharedHelper.createJWT('', sub, 60, 'JWT_SECRET'); // 604800
  } else {
    roleFromSession = 'casual';
    token = null;
  }
  const requiredRoleForAuthorization = req.query.role;

  const permissions = config.get('permissions');

  if (permissions[roleFromSession].indexOf(requiredRoleForAuthorization) >= 0) {
    return res.status(200).json({permission: true, token});
  } else {
    return res.status(200).json({permission: false, token});
  }
};

/**
 * Middleware for user create
 * invokes 'next()' to login created user
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const userCreate = function(req, res, next) {
  let user = {};
  Object.assign(user, req.body);
  user.provider = 'local';

  userHelper.isEmailUnique(user.email, user.provider)
      .then(() => userHelper.isLoginUnique(user.login))
      .then(() => bcrypt.hash(req.body.password, 10))
      .then((hash) => {
        user.password = hash;
        user.role = 'guest';
        user.createdAt = Date.now();
        user.commentsReadedTill = Date.now();
        const userModel = new UserModel(user);
        // create new user
        return userModel.save();
      })
      // next to login created user
      .then(() => next())
      .catch((err) => next(err));
};

module.exports = {
  userCheckAuthorization,
  syncTokenToSession,
  userProfile,
  userLogin,
  userLogout,
  userCreate,
  userEdit,
  userEmailVerificationSend,
  userGoogleSignin,
  userEmailVerificationReceive,
  passwordReset,
  passwordResetCheckCode,
  passwordResetCheckEmail,
  userEditUnsecure,
};
