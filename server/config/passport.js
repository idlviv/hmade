const ApplicationError = require('../errors/applicationError');
const DbError = require('../errors/dbError');
const log = require('../config/winston')(module);
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const UserModel = require('../models/userModel');
const bcrypt = require('bcryptjs');

const config = require('../config');

module.exports = function(passport) {
  let emailVerificationOptions = {};
  emailVerificationOptions.jwtFromRequest = ExtractJwt.fromUrlQueryParameter('token');
  emailVerificationOptions.secretOrKey = config.get('JWT_EMAIL');

  let jwtOptions = {};
  jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
  jwtOptions.secretOrKey = config.get('JWT_SECRET');

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser((_id, done) => {
    UserModel.findById(_id).then(
        (user) => done(null, user),
        (err) => done(err, false)
    );
  });


  passport.use(new LocalStrategy(
      {
        usernameField: 'login',
        passwordField: 'password',
      },
      function(login, password, done) {
        let userCandidate = {
          login,
          password,
        };
        log.debug('login', login);
        log.debug('password', password);
        UserModel.findOne({login: userCandidate.login})
            .then((user) => {
              if (!user) {
                return done(new ApplicationError('Невірний логін', 401));
              }
              if (user.isPasswordLocked) {
                return done(new ApplicationError('maxTries', 401));
              }
              bcrypt.compare(userCandidate.password, user.password)
                  .then((passwordMatched) => {
                    if (!passwordMatched) {
                      const dateNow = Date.now(); // in seconds
                      let query;
      
                      if ((dateNow - user.passwordLockUntil) > 600000) {
                        UserModel.update({_id: user._id},
                            {
                              $set: {
                                passwordTries: 1,
                                passwordLockUntil: dateNow,
                              },
                            })
                            .then((result)=>{
                              if (result.ok !== 1) {
                                done(new DbError());
                              }
                              return done(new ApplicationError('Невірний пароль', 401));
                            })
                            .catch((err) => next(new ApplicationError()));
                      } else {
                        if (user.passwordTries >= user.passwordLockTries) {
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
                                done(new DbError());
                              }
                              return done(new ApplicationError('Невірний пароль', 401));
                            })
                            .catch((err) => done(new ApplicationError()));
                      }
                    } else {
                      return done(null, user);
                    }
                  })
                  .catch((err) => done(new ApplicationError(err.message, err.status)));
            },
            (err) => done(new DbError(err.message, err.code))
            )
            .catch((err) => done(new ApplicationError()));
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
            log.debug('profile', profile);
            UserModel.findOne({googleId: profile.id})
                .then((user) => {
                  if (user) {
                    // if user is already in db update credentials
                    user.set({
                      login: profile._json.displayName,
                      avatar: profile._json.image.url,
                      name: profile._json.name.givenName,
                      surname: profile._json.name.familyName,
                      email: profile._json.emails[0].value,
                    })
                        .save()
                        .then((updatedUser) => {
                          console.log('updatedUser', updatedUser);
                          // if (updatedUser.ok !== 1) {
                          //   return done('error singn in', false);
                          // }
                          return done(null, updatedUser);
                        },
                        (err) => done(err, false)
                        );
                  } else {
                    // if new user, create new record in db
                    new UserModel(
                        {
                          login: profile._json.displayName,
                          avatar: profile._json.image.url,
                          ban: 0,
                          name: profile._json.name.givenName,
                          surname: profile._json.name.familyName,
                          role: 'user',
                          email: profile._json.emails[0].value,
                          googleId: profile._json.id,
                        })
                        .save()
                        .then((newUser) => {
                          return done(null, newUser);
                        },
                        (err) => done(err, false)
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
