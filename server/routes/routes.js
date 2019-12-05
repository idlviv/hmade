const express = require('express');
const router = express.Router();

const { ClientError, sharedMiddleware } = require('user-man');
const catalogController = require('../controllers/catalogController');
const mcController = require('../controllers/mcController');
const socialController = require('../controllers/socialController');
const productController = require('../controllers/productController');

const log = require('../config/winston')(module);

/**
 * social routes
 */

router.delete('/social/delete-comment',
    sharedMiddleware.authentication(),
    sharedMiddleware.authorization('manager'),
    socialController.deleteComment
);

router.post('/social/add-comment',
    sharedMiddleware.recaptcha(),
    sharedMiddleware.authentication(),
    sharedMiddleware.authorization('user'),
    socialController.addComment
);

router.put('/social/display-comment',
    sharedMiddleware.authentication(),
    sharedMiddleware.authorization('manager'),
    socialController.displayComment
);

router.put('/social/likes-set',
    sharedMiddleware.authentication(),
    sharedMiddleware.authorization('user'),
    socialController.likesSet
);

router.get('/social/get-comments',
    socialController.getComments
);

router.get('/social/get-unreaded-comments-categories',
    sharedMiddleware.authentication(),
    sharedMiddleware.authorization('user'),
    socialController.getUnreadedCommentsCategories
);

router.get('/social/get-unreaded-comments-length',
    sharedMiddleware.authentication(),
    sharedMiddleware.authorization('user'),
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
    sharedMiddleware.authentication(),
    mcController.getSkuList
);

router.post('/mc/add-main-image',
    sharedMiddleware.authentication(),
    sharedMiddleware.authorization('manager'),
    mcController.addMainImage
);

router.post('/mc/add-steps-pic',
    sharedMiddleware.authentication(),
    sharedMiddleware.authorization('manager'),
    mcController.addStepsPic
);

router.post('/mc/upsert',
    sharedMiddleware.authentication(),
    sharedMiddleware.authorization('manager'),
    mcController.mcUpsert
);

router.delete('/mc/delete/:_id',
    sharedMiddleware.authentication(),
    sharedMiddleware.authorization('manager'),
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
//     sharedMiddleware.authorization('manager'),
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
//     sharedMiddleware.authorization('manager'),
//     productController.productCreate
// );

// router.put('/product/edit',
//     passport.authenticate('jwt', {session: false}),
//     sharedMiddleware.authorization('manager'),
//     productController.productEdit
// );

router.delete('/product/delete/:_id',
    sharedMiddleware.authentication(),
    sharedMiddleware.authorization('manager'),
    productController.deleteProduct
);

router.post('/product/add-image',
    sharedMiddleware.authentication(),
    sharedMiddleware.authorization('manager'),
    productController.productAddImage
);

// hmade
router.get('/product/increase-views',
    productController.increaseViews
);

router.post('/product/add-menu-image',
    sharedMiddleware.authentication(),
    sharedMiddleware.authorization('manager'),
    productController.productAddMenuImage
);

router.post('/product/add-main-image',
    sharedMiddleware.authentication(),
    sharedMiddleware.authorization('manager'),
    productController.productAddMainImage
);

router.post('/product/upsert',
    sharedMiddleware.authentication(),
    sharedMiddleware.authorization('manager'),
    productController.productUpsert
);

router.get('/product/get-sku-list',
    sharedMiddleware.authentication(),
    productController.getSkuList
);

router.get('/product/get-product-by-id',
    productController.getProductById
);

router.get('/product/get-products-by-parent',
    productController.getProductsByParent
);

// /**
//  * catalog routes
//  */

// router.get('/catalog/get-main-menu',
//     catalogController.getMainMenu
// );

// router.get('/catalog/get-all-parents',
//     catalogController.getAllParents
// );

// // hmade
// router.get('/catalog/get-prefix',
//     catalogController.getPrefix
// );

// router.get('/catalog/get-siblings',
//     catalogController.getSiblings
// );

// router.get('/catalog/get-category-by-id',
//     catalogController.getCategoryById
// );

// router.get('/catalog/get-descendants',
//     catalogController.getDescendants
// );

// router.get('/catalog/get-children',
//     catalogController.getChildren
// );

/**
 * shared routes
 */

router.post('/shared/send-feedback-message',
    sharedMiddleware.recaptcha(),
    sharedMiddleware.sendFeedbackMessage(),
);

/**
 * catch apis 404 and forward to error handler
 */

router.use('*', function(req, res, next) {
  const err = new ClientError({message: 'Запит на неіснуючий API', status: 404});
  next(err);
});

module.exports = router;

