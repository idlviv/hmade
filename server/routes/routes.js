const express = require('express');
const router = express.Router();
const config = require('../config');

const { ClientError } = require('user-man');

const auth = require('user-man').auth(config.get('permissions'));

const passport = require('passport');
const userController = require('../controllers/userController');
const catalogController = require('../controllers/catalogController');
const mcController = require('../controllers/mcController');
const socialController = require('../controllers/socialController');
const uploadController = require('../controllers/uploadController');
const productController = require('../controllers/productController');
const sharedController = require('../controllers/sharedController');
const recaptcha = require('../middleware/recaptcha');
// const authorization = require('../middleware/auth').authorization;
// const authentication = require('../middleware/auth').authentication;
const setUserCookie = require('../middleware/cookie').setUserCookie;

// const notGuardExtarctUser_id = require('../middleware/auth').notGuardExtarctUser_id;
const log = require('../config/winston')(module);

/**
 * social routes
 */

router.delete('/social/delete-comment',
    auth.authentication,
    auth.authorization('manager'),
    socialController.deleteComment
);

router.post('/social/add-comment',
    recaptcha,
    auth.authentication,
    auth.authorization('user'),
    socialController.addComment
);

router.put('/social/display-comment',
    auth.authentication,
    auth.authorization('manager'),
    socialController.displayComment
);

router.put('/social/likes-set',
    auth.authentication,
    auth.authorization('user'),
    socialController.likesSet
);

router.get('/social/get-comments',
    socialController.getComments
);

router.get('/social/get-unreaded-comments-categories',
    auth.authentication,
    auth.authorization('user'),
    socialController.getUnreadedCommentsCategories
);

router.get('/social/get-unreaded-comments-length',
    auth.authentication,
    auth.authorization('user'),
    socialController.getUnreadedCommentsLength
);

/**
 * mc routes
 */

// router.get('/mc/get-mcs', // tmp
//     mcController.getMcs
// );
router.get('/mc/get-main-page-mcs',
    mcController.getMainPageMcs
);

router.get('/mc/get-mc-by-id/:_id',
    mcController.getMcById
);

router.get('/mc/get-mc-by-id-and-inc-views/:_id',
    mcController.getMcByIdAndIncViews
);

router.get('/mc/get-mcs-by-filter',
    mcController.getMcsByFilter
);

router.get('/mc/get-mcs-by-parent',
    mcController.getMcsByParent
);

router.get('/mc/get-sku-list',
    auth.authentication,
    mcController.getSkuList
);

router.post('/mc/add-main-image',
    auth.authentication,
    auth.authorization('manager'),
    mcController.addMainImage
);

router.post('/mc/add-steps-pic',
    auth.authentication,
    auth.authorization('manager'),
    mcController.addStepsPic
);

router.post('/mc/upsert',
    auth.authentication,
    auth.authorization('manager'),
    mcController.mcUpsert
);

router.delete('/mc/delete/:_id',
    auth.authentication,
    auth.authorization('manager'),
    mcController.mcDelete
);

/**
 * product routes
 */
router.get('/product/get-products-by-design-id',
    productController.getProductsByDesignId
);

// router.post('/product/add-assets',
//     passport.authenticate('jwt', {session: false}),
//     auth.authorization('manager'),
//     productController.productAddAssets
// );

router.get('/product/get-products',
    productController.getProducts
);

router.get('/product/get-main-page-products',
    productController.getMainPageProducts
);

router.get('/product/get-new-products',
    productController.getNewProducts
);

// router.post('/product/create',
//     passport.authenticate('jwt', {session: false}),
//     auth.authorization('manager'),
//     productController.productCreate
// );

// router.put('/product/edit',
//     passport.authenticate('jwt', {session: false}),
//     auth.authorization('manager'),
//     productController.productEdit
// );

router.delete('/product/delete/:_id',
    auth.authentication,
    auth.authorization('manager'),
    productController.deleteProduct
);

router.post('/product/add-image',
    auth.authentication,
    auth.authorization('manager'),
    productController.productAddImage
);

// hmade
router.get('/product/increase-views',
    productController.increaseViews
);

router.post('/product/add-menu-image',
    auth.authentication,
    auth.authorization('manager'),
    productController.productAddMenuImage
);

router.post('/product/add-main-image',
    auth.authentication,
    auth.authorization('manager'),
    productController.productAddMainImage
);

router.post('/product/upsert',
    auth.authentication,
    auth.authorization('manager'),
    productController.productUpsert
);

router.get('/product/get-sku-list',
    auth.authentication,
    productController.getSkuList
);

router.get('/product/get-product-by-id',
    productController.getProductById
);

router.get('/product/get-products-by-parent',
    productController.getProductsByParent
);

/**
 * catalog routes
 */

router.get('/catalog/get-main-menu',
    catalogController.getMainMenu
);

router.get('/catalog/get-all-parents',
    catalogController.getAllParents
);

// hmade
router.get('/catalog/get-prefix',
    catalogController.getPrefix
);

router.get('/catalog/get-siblings',
    catalogController.getSiblings
);

router.get('/catalog/get-category-by-id',
    catalogController.getCategoryById
);

router.get('/catalog/get-descendants',
    catalogController.getDescendants
);

router.get('/catalog/get-children',
    catalogController.getChildren
);

/**
 * users routes
 */

router.post('/user/create',
    recaptcha,
    userController.userCreate,
    passport.authenticate('localWithoutPassword'),
    userController.userLogin,
);

router.get('/user/login',
    passport.authenticate('local'),
    userController.userLogin,
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
        {session: true})
);

// 3.step: after user chose his account google redirects here
// this uri was saved on google api and in passport options
router.get('/user/auth/google/redirect',
    // 4.step: passport get code from google, extracts 'scope' info
    // and passed it to the callback function (./config/passport)
    passport.authenticate('google', {session: true}),
    // 5.step: passport calls this callback with data
    userController.userGoogleSignin
);

router.get('/user/logout',
    userController.userLogout,
);

router.get('/user/profile',
    auth.authentication,
    userController.userProfile
);

router.get('/user/checkauthorization',
    userController.userCheckAuthorization
);

router.get('/user/sync-token-to-session',
    userController.syncTokenToSession
);


// edit 'local users' credentials (name, surname, password)
router.put('/user/edit',
    auth.authentication,
    userController.userEdit
);

router.put('/user/editUnsecure',
    auth.authentication,
    auth.authorization('user'),
    userController.userEditUnsecure
);

router.put('/user/edit-avatar',
    auth.authentication,
    uploadController.userEditAvatar
);

router.get('/user/email-verification-send',
    auth.authentication,
    userController.userEmailVerificationSend
);

router.get('/user/email-verification',
    passport.authenticate('jwt.email.verification', {session: true}),
    userController.userEmailVerificationReceive,
);

// first step to reset password
router.get('/user/password-reset-check-email',
    // logout if user already logged in
    userController.userLogout,
    // function(req, res, next) {
    //   req.logout();
    //   next();
    // },
    // setUserCookie,
    recaptcha,
    userController.passwordResetCheckEmail
);

// second step to reset password
router.get('/user/password-reset-check-code',
    passport.authenticate('jwt.passwordResetCheckCode', {session: false}),
    userController.passwordResetCheckCode
);

// third step to reset password
router.get('/user/password-reset',
    passport.authenticate('jwt.passwordReset', {session: false}),
    userController.passwordReset,
    passport.authenticate('localWithoutPassword'),
    userController.userLogin,
);

/**
 * shared routes
 */

router.post('/shared/send-feedback-message',
    recaptcha,
    sharedController.sendFeedbackMessage
);

/**
 * catch apis 404 and forward to error handler
 */

router.use('*', function(req, res, next) {
  const err = new ClientError({message: 'Запит на неіснуючий API', status: 404});
  next(err);
});

module.exports = router;

