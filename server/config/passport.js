const ApplicationError = require('../errors/applicationError');
const DbError = require('../errors/dbError');
const log = require('../config/winston')(module);
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const UserModel = require('../models/userModel');
const bcrypt = require('bcryptjs');
const userController = require('../controllers/userController');

const config = require('../config');

module.exports = function(passport) {
  let emailVerificationOptions = {};
  emailVerificationOptions.jwtFromRequest = ExtractJwt.fromUrlQueryParameter('token');
  emailVerificationOptions.secretOrKey = config.get('JWT_EMAIL');

  let jwtOptions = {};
  jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
  jwtOptions.secretOrKey = config.get('JWT_SECRET');

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

        userController.isLoginExists(userCandidate.login)
            .then((userFromDb) => userController.isPasswordLocked(userFromDb))
            .then((userFromDb) => userController.isPasswordMatched(userCandidate, userFromDb))
            .then((userFromDb) => done(null, userFromDb))
            .catch((err) => done(err, false));
      }
  ));

  // login user after creation or change credentials
  // without password
  passport.use('localWithoutPassword', new LocalStrategy(
      {
        usernameField: 'login',
      },
      function(login, password, done) {
        userController.isLoginExists(login)
            .then((userFromDb) => done(null, userFromDb))
            .catch((err) => done(err, false));
      }
  ));

  //   Strategies in Passport require a `verify` function, which accept
  //   credentials (in this case, an accessToken, refreshToken, and Google
  //   profile), and invoke a callback with a user object.
  passport.use(
      new GoogleStrategy(
          {
            clientID: config.get('GOOGLE_CLIENT_ID'),
            clientSecret: config.get('GOOGLE_CLIENT_SECRET'),
            callbackURL: 'http://localhost:8081/api/user/auth/google/redirect',
          },
          function(accessToken, refreshToken, profile, done) {
            let email;
            for (let i = 0; i < profile.emails.length; i++) {
              log.debug('emails[i]', emails[i]);

              if (profile.emails[i].type === 'account') {
                email = profile.emails[i].value;
                break;
              }
            }

            UserModel.userController.isEmailExists(email)
                .then((userFromDb) => {
                  if (userFromDb && userFromDb.provider === 'native') {
                  // make combination
                  } else if (userFromDb && userFromDb.provider === 'google') {
                  // make update credentials
                  } else if (userFromDb) {
                  // email already registred, login with previous provider
                  } else {
                  // new
                  }

                });

            log.debug('profile', profile);
            UserModel.findOne({providersId: profile.id})
                .then((user) => {
                  if (user) {
                    // if user is already in db update credentials
                    user.set({
                      avatar: profile._json.image.url,
                      name: profile._json.name.givenName,
                      surname: profile._json.name.familyName,
                      accessToken,
                    }).save()
                        .then(
                            (updatedUser) => done(null, updatedUser),
                            (err) => done(new DbError(), false)
                        );
                  } else {
                    // if new user, create new record in db
                    new UserModel(
                        {
                          provider: 'google',
                          login: 'gid_' + profile._json.id,
                          email: profile._json.emails[0].value,
                          avatar: profile._json.image.url,
                          name: profile._json.name.givenName,
                          surname: profile._json.name.familyName,
                          role: 'user',
                          ban: 0,
                          createdAt: Date.now(),
                          providersId: profile._json.id,
                          accessToken,
                          refreshToken,
                        })
                        .save()
                        .then(
                            (newUser) => done(null, newdUser),
                            (err) => done(new DbError(), false)
                        );
                  }
                },
                (err) => done(err, false)
                );
          }
      ));

  passport.use('jwt',
      new JwtStrategy(jwtOptions, (jwtPayload, done) => {
        // на основі _id (витягнутого з токена) робить пошук
        // в базі, чи є такий юзер, і ф-я done повертає відповідь

        UserModel.findOne({_id: jwtPayload.sub._id})
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

  passport.use('jwt.email.verification',
      new JwtStrategy(emailVerificationOptions, (jwtPayload, done) => {
        UserModel.findOne({_id: jwtPayload.sub._id})
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

  passport.use('jwt.passwordResetCheckCode',
      new JwtStrategy(jwtOptionsPasswordResetCheckCode, (jwtPayload, done) => {
        // console.log('passport sub', jwtPayload.sub);
        UserModel.findOne({_id: jwtPayload.sub._id})
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
        UserModel.findOne({_id: jwtPayload.sub._id})
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
