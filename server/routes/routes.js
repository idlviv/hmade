const express = require('express');
const router = express.Router();

const { ClientError, auth, recaptcha } = require('user-man');
// const auth = require('user-man').auth;
// const recaptcha = require('user-man').recaptcha;

const catalogController = require('../controllers/catalogController');
const mcController = require('../controllers/mcController');
const socialController = require('../controllers/socialController');
const productController = require('../controllers/productController');
const sharedController = require('../controllers/sharedController');

const log = require('../config/winston')(module);

/**
 * social routes
 */

router.delete('/social/delete-comment',
    auth.authentication(),
    auth.authorization('manager'),
    socialController.deleteComment
);

router.post('/social/add-comment',
    recaptcha.mw(),
    auth.authentication(),
    auth.authorization('user'),
    socialController.addComment
);

router.put('/social/display-comment',
    auth.authentication(),
    auth.authorization('manager'),
    socialController.displayComment
);

router.put('/social/likes-set',
    auth.authentication(),
    auth.authorization('user'),
    socialController.likesSet
);

router.get('/social/get-comments',
    socialController.getComments
);

router.get('/social/get-unreaded-comments-categories',
    auth.authentication(),
    auth.authorization('user'),
    socialController.getUnreadedCommentsCategories
);

router.get('/social/get-unreaded-comments-length',
    auth.authentication(),
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
    auth.authentication(),
    mcController.getSkuList
);

router.post('/mc/add-main-image',
    auth.authentication(),
    auth.authorization('manager'),
    mcController.addMainImage
);

router.post('/mc/add-steps-pic',
    auth.authentication(),
    auth.authorization('manager'),
    mcController.addStepsPic
);

router.post('/mc/upsert',
    auth.authentication(),
    auth.authorization('manager'),
    mcController.mcUpsert
);

router.delete('/mc/delete/:_id',
    auth.authentication(),
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
    auth.authentication(),
    auth.authorization('manager'),
    productController.deleteProduct
);

router.post('/product/add-image',
    auth.authentication(),
    auth.authorization('manager'),
    productController.productAddImage
);

// hmade
router.get('/product/increase-views',
    productController.increaseViews
);

router.post('/product/add-menu-image',
    auth.authentication(),
    auth.authorization('manager'),
    productController.productAddMenuImage
);

router.post('/product/add-main-image',
    auth.authentication(),
    auth.authorization('manager'),
    productController.productAddMainImage
);

router.post('/product/upsert',
    auth.authentication(),
    auth.authorization('manager'),
    productController.productUpsert
);

router.get('/product/get-sku-list',
    auth.authentication(),
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
 * shared routes
 */

router.post('/shared/send-feedback-message',
    recaptcha.mw(),
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

