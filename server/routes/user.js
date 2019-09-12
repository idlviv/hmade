const express = require('express');
const router = express.Router();

const { cookie, auth, recaptcha, userController }= require('user-man');
// const auth = require('user-man').auth;
// const recaptcha = require('user-man').recaptcha;
// const user = require('user-man').user;


const passport = require('passport');
const localUserController = require('../controllers/userController');
const uploadController = require('../controllers/uploadController');

const log = require('../config/winston')(module);

/**
 * users routes
 */

router.post('/user/create',
    recaptcha.mw(),
    userController.create(),
    // localUserController.userCreate,
    passport.authenticate('localWithoutPassword'),
    cookie.setUserCookie(),
    localUserController.userLogin
);

router.get('/user/login',
    passport.authenticate('local'),
    cookie.setUserCookie(),
    localUserController.userLogin
);

// 1step: on google authenticate buntton press
router.get('/user/auth/google',
    // 2step: passport redirects to google 'chose account' window
    passport.authenticate(
        'google',
        {
          scope: ['profile', 'email'],
          accessType: 'offline',
        },
        { session: false })
);

// 3.step: after user chose his account google redirects here
// this uri was saved on google api and in passport options
router.get('/user/auth/google/redirect',
    // 4.step: passport get code from google, extracts 'scope' info
    // and passed it to the callback function (./config/passport)
    passport.authenticate('google', { session: true }),

    // 5.step: set user cookie (for frontend manipulations)
    cookie.setUserCookie(),

    // 6.step: redirect to frontend
    function(req, res, next) {
      res.redirect('/user/redirection-after-oauth');
    },
    // localUserController.userGoogleSignin
);

router.get('/user/logout',
    localUserController.userLogout,
    cookie.setUserCookie(),
    function(req, res, next) {
      return res.status(200).json('Logged out');
    }
);

router.get('/user/profile',
    auth.authentication(),
    localUserController.userProfile
);

router.get('/user/checkauthorization',
    localUserController.userCheckAuthorization
);

router.get('/user/sync-token-to-session',
    localUserController.syncTokenToSession
);


// edit 'local users' credentials (name, surname, password)
router.put('/user/edit',
    auth.authentication(),
    localUserController.userEdit
);

router.put('/user/editUnsecure',
    auth.authentication(),
    auth.authorization('user'),
    localUserController.userEditUnsecure
);

router.put('/user/edit-avatar',
    auth.authentication(),
    uploadController.userEditAvatar
);

router.get('/user/email-verification-send',
    auth.authentication(),
    localUserController.userEmailVerificationSend
);

router.get('/user/email-verification',
    passport.authenticate('jwt.email.verification', { session: true }),
    localUserController.userEmailVerificationReceive,
);

// first step to reset password
router.get('/user/password-reset-check-email',
    // logout if user already logged in
    localUserController.userLogout,
    cookie.setUserCookie(),
    recaptcha.mw(),
    localUserController.passwordResetCheckEmail
);

// second step to reset password
router.get('/user/password-reset-check-code',
    passport.authenticate('jwt.passwordResetCheckCode', { session: false }),
    localUserController.passwordResetCheckCode
);

// third step to reset password
router.get('/user/password-reset',
    passport.authenticate('jwt.passwordReset', { session: false }),
    localUserController.passwordReset,
    passport.authenticate('localWithoutPassword'),
    localUserController.userLogin,
);

module.exports = router;

