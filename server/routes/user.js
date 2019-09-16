const express = require('express');
const router = express.Router();

const { userController, sharedMiddleware }= require('user-man');

const passport = require('passport');
const localUserController = require('../controllers/userController');

const log = require('../config/winston')(module);



/**
 * users routes
 */

// router.post('/user/create',
//     sharedMiddleware.recaptcha(),
//     userController.create(),
//     passport.authenticate('localWithoutPassword'),
//     userController.setFrontendAuthCookie(),
//     userController.login()

//     // localUserController.userLogin
// );

// router.get('/user/login',
//     passport.authenticate('local'),
//     userController.setFrontendAuthCookie(),
//     userController.login()
// );

// // 1step: on google authenticate buntton press
// router.get('/user/auth/google',
//     // 2step: passport redirects to google 'chose account' window
//     passport.authenticate(
//         'google',
//         {
//           scope: ['profile', 'email'],
//           accessType: 'offline',
//         },
//         { session: false })
// );

// // 3.step: after user chose his account google redirects here
// // this uri was saved on google api and in passport options
// router.get('/user/auth/google/redirect',
//     // 4.step: passport get code from google, extracts 'scope' info
//     // and passed it to the callback function (./config/passport)
//     passport.authenticate('google', { session: true }),

//     // 5.step: set user cookie (for frontend manipulations)
//     userController.setFrontendAuthCookie(),

//     // 6.step: redirect to frontend
//     function(req, res, next) {
//       res.redirect('/user/redirection-after-oauth');
//     },
//     // localUserController.userGoogleSignin
// );

// // router.get('/user/logout',
// //     userController.logout(),
// //     userController.setFrontendAuthCookie(),
// //     userController.logoutResponse(),

// // );

// router.get('/user/profile',
//     sharedMiddleware.authentication(),
//     localUserController.userProfile
// );

// router.get('/user/checkauthorization',
//     localUserController.userCheckAuthorization
// );

// router.get('/user/sync-token-to-session',
//     localUserController.syncTokenToSession
// );


// edit 'local users' credentials (name, surname, password)
// router.put('/user/edit',
//     sharedMiddleware.authentication(),
//     localUserController.userEdit
// );

// router.put('/user/editUnsecure',
//     sharedMiddleware.authentication(),
//     sharedMiddleware.authorization('user'),
//     localUserController.userEditUnsecure
// );

// router.put('/user/edit-avatar',
//     sharedMiddleware.authentication(),
//     uploadController.userEditAvatar
// );

router.get('/user/email-verification-send',
    sharedMiddleware.authentication(),
    localUserController.userEmailVerificationSend
);

router.get('/user/email-verification',
    passport.authenticate('jwt.email.verification', { session: true }),
    localUserController.userEmailVerificationReceive,
);

// first step to reset password
router.get('/user/password-reset-check-email',
    // logout if user already logged in
    userController.logout(),
    userController.setFrontendAuthCookie(),
    sharedMiddleware.recaptcha(),
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
    userController.login()

    // localUserController.userLogin,
);

module.exports = router;

