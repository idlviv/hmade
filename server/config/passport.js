const ClientError = require('../errors/clientError');
const DbError = require('../errors/dbError');
const log = require('../config/winston')(module);
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const UserModel = require('../models/userModel');

const bcrypt = require('bcryptjs');
const userHelper = require('../helpers/userHelper');

const config = require('../config');

module.exports = function(passport) {
  passport.serializeUser((user, done) => {
    return done(null, user._id);
  });

  passport.deserializeUser((_id, done) => {
    UserModel.findById(_id).then(
        (user) => done(null, user),
        (err) => done(err, false)
    );
  });

  // login user with password
  passport.use('local', new LocalStrategy(
      {
        usernameField: 'login',
        passwordField: 'password',
      },
      function(login, password, done) {
        let userCandidate = {
          login,
          password,
        };
        let user;
        userHelper.isLoginExists(userCandidate.login)
            .then((userFromDb) => {
              user = userFromDb;
              return userHelper.isPasswordLocked(userFromDb);
            })
        // if password doesn't match then throw error with code 'wrongCredentials' here
            .then((userFromDb) => userHelper.isPasswordMatched(userCandidate.password, userFromDb._doc.password, userFromDb))
            .then((userFromDb) => done(null, userFromDb))
            .catch((err) => {
              if (err.code === 'wrongCredentials') {
                userHelper.updatePasswordLockOptions(user)
                    .then(() => done(err, false));
              } else {
                done(err, false);
              }
            });
      }
  ));

  // login user after creation or change credentials
  // without password
  passport.use('localWithoutPassword', new LocalStrategy(
      {
        usernameField: 'login',
      },
      function(login, password, done) {
        userHelper.isLoginExists(login)
            .then((userFromDb) => {
              console.log('userFromDb', userFromDb);
              
              done(null, userFromDb);
            })
            .catch((err) => done(err, false));
      }
  ));

  // google sign in strategy
  passport.use(
      new GoogleStrategy(
          {
            clientID: config.get('GOOGLE_CLIENT_ID'),
            clientSecret: config.get('GOOGLE_CLIENT_SECRET'),
            callbackURL: config.get('SERVER_URL') + '/api/user/auth/google/redirect',
          },
          function(accessToken, refreshToken, profile, done) {
            // log.debug('server url %o', config.get('SERVER_URL'));
            // extract 'account' email
            let email;
            for (let i = 0; i < profile.emails.length; i++) {
              if (profile.emails[i].type === 'account') {
                email = profile.emails[i].value;
                break;
              }
            }

            UserModel.findOne({ providersId: profile.id })
                .then((user) => {
                  if (user) {
                    // if user is already in db update credentials
                    return user.set({
                      avatar: profile._json.image.url,
                      name: profile._json.name.givenName,
                      surname: profile._json.name.familyName,
                      accessToken,
                    }).save();
                  } else {
                    // if new user, create new record in db
                    return new UserModel({
                      provider: 'google',
                      login: 'gid_' + profile._json.id,
                      email,
                      avatar: profile._json.image.url,
                      name: profile._json.name.givenName,
                      surname: profile._json.name.familyName,
                      role: 'google',
                      ban: 0,
                      createdAt: Date.now(),
                      commentsReadedTill: Date.now(),
                      providersId: profile._json.id,
                      accessToken,
                      refreshToken,
                    }).save();
                  }
                })
                .then((user) => {
                  return done(null, user);
                })
                .catch((err) => done(new DbError(err), false));
          }
      ));

  let jwtOptions = {};
  jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
  jwtOptions.secretOrKey = config.get('JWT_SECRET');

  passport.use('jwt',
      new JwtStrategy(jwtOptions, (jwtPayload, done) => {
      // на основі _id (витягнутого з токена) робить пошук
      // в базі, чи є такий юзер, і ф-я done повертає відповідь

        UserModel.findOne({ _id: jwtPayload.sub._id })
            .then((user) => {
              if (user) {
                done(null, user);
              } else {
                done(null, false);
              }
            })
            .catch((err) => {
              done(err, false);
            });
      }
      ));

  let emailVerificationOptions = {};
  emailVerificationOptions.jwtFromRequest = ExtractJwt.fromUrlQueryParameter('token');
  emailVerificationOptions.secretOrKey = config.get('JWT_EMAIL');

  passport.use('jwt.email.verification',
      new JwtStrategy(emailVerificationOptions, (jwtPayload, done) => {
        UserModel.findOne({ _id: jwtPayload.sub._id })
            .then((user) => {
              if (user) {
                done(null, user);
              } else {
                done(null, false);
              }
            })
            .catch((err) => {
              done(err, false);
            });
      }
      ));

  let jwtOptionsPasswordResetCheckCode = {};
  jwtOptionsPasswordResetCheckCode.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
  jwtOptionsPasswordResetCheckCode.secretOrKey = config.get('JWT_SECRET_CODE');
  // extract _id from token to identify user, which resets password
  passport.use('jwt.passwordResetCheckCode',
      new JwtStrategy(jwtOptionsPasswordResetCheckCode, (jwtPayload, done) => {
        UserModel.findOne({ _id: jwtPayload.sub._id })
            .then((user) => {
              if (user) {
                done(null, user);
              } else {
                done(null, false);
              }
            })
            .catch((err) => {
              done(err, false);
            });
      }
      ));

  let jwtOptionsPasswordReset = {};
  jwtOptionsPasswordReset.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
  jwtOptionsPasswordReset.secretOrKey = config.get('JWT_SECRET_CHANGE_PASSWORD');

  passport.use('jwt.passwordReset',
      new JwtStrategy(jwtOptionsPasswordReset, (jwtPayload, done) => {
        UserModel.findOne({ _id: jwtPayload.sub._id })
            .then((user) => {
              if (user) {
                done(null, user);
              } else {
                done(null, false);
              }
            })
            .catch((err) => {
              done(err, false);
            });
      }
      ));
};
