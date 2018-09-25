const CatalogModel = require('../models/catalogModel');
const ProductModel = require('../models/productModel');

const ResObj = require('../libs/responseObject');
const ResData = require('../libs/responseData');

const DbError = require('../errors/dbError');
const ApplicationError = require('../errors/applicationError');
const ObjectId = require('../config/mongoose').Types.ObjectId;
const formidable = require('formidable');
util = require('util');
const log = require('../config/winston')(module);
const cloudinary = require('../config/cloudinary');
const catalogController = require('../controllers/catalogController');

module.exports.getProductsWithGallery = function(req, res, next) {

  ProductModel.find({assets: { $exists: true, $not: {$size: 0} }})
    .then(result =>
      res.status(200).json(new ResObj(true, 'Масив колекцій з галереєю', result))
    )
    .catch(err => next(new DbError()));
};

module.exports.getProductsByDesignId = function(req, res, next) {
  const design_id = req.query.design_id;

  ProductModel.aggregate([
    {
      $match: {'designs': design_id, 'display': true}
    },
    {
      $project: {
        '_id': 1,
        'name': 1,
        'category_id': '$parent'
      }
    }
  ])
    .then(result =>
      res.status(200).json(new ResObj(true, 'Масив _id продуктів', result))
    )
    .catch(err => next(new DbError()));
};

module.exports.getProducts = function(req, res, next) {
  let category = req.query.category;
  let categories = [];
  catalogController._getDescendants(category, 1)
    .then(result => {
      if(result.length > 0) {
        categories = result.map(function(item) {
          return item._id;
        });
      } else {
        categories = [category];
      }
      ProductModel.find(
        {categories: {$in: categories}},
        // {sku: 1, _id: 0}
        )
        .sort({order: 1})
        .then(result => {
          return res.status(200).json(new ResObj(true, 'Масив товарів', result));
        })
        .catch(err => next(new DbError()));
    })
    .catch(err => next(err));
};

module.exports.getMainPageProducts = function(req, res, next) {
  ProductModel.find(
    {onMainPage: true},
  )
    .then(result => {
      return res.status(200).json(new ResObj(true, 'Товари головної сторінки', result));
    })
    .catch(err => next(new DbError()));
};



module.exports.productAddImage = function(req, res, next) {
  let form = new formidable.IncomingForm({maxFileSize: 10500000});
  // form.on('file', function(file) {
  //   log.verbose('file - uploaded');
  // });
  form.parse(req, function(err, fields, files) {
    if (err) {
      return next(new ApplicationError('Помилка завантаження зображення - form parse', 400));
    }

    log.verbose('fields', fields);
    // log.verbose('files', files);
    log.verbose('date', Date.now());
    log.verbose('date-slice', String(Date.now()).slice(0, 7));

    cloudinary.v2.uploader.upload(
      files.file.path,
      {
        public_id: 'product_' + fields.sku + '_' + Date.now(),// jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
        // width: 1920, height: 1920, crop: 'fill'
      },
      function(err, result) {
        if (err) {
          return next(
            new ApplicationError('Помилка завантаження зображення - upload', 400)
          );
        }
        console.log('product_img_cloudinary result', result);
        return res.status(200).json(new ResObj(true, 'Зображення завнтажене', result.public_id));
      });

  });
};

module.exports.productCreate = function(req, res, next) {
  const product = req.body;
  product.createdAt = Date.now();
  const productModel = new ProductModel(product);

  productModel.save()
    .then(
      result => {
        return res.status(200).json(new ResObj(true, 'Виріб створений'));
      },
      err  =>
        // redirect to error handler
        next(new DbError(err.message, err.code))
    );
};

module.exports.productEdit = function(req, res, next) {
  const product = req.body;
  // product.createdAt = Date.now();
  // const productModel = new ProductModel(product);

  ProductModel.update({_id: ObjectId(product._id)}, product)
    .then(
      result => {
        if (result.nModified !== 1) {
          next(new ApplicationError('Не вдалося внести зміни', 400));
        } else {
          return res.status(200).json(new ResObj(true, 'Зміни внесено'));
        }
      },
      err => next(new DbError(err.message, err.code))
    );
};

module.exports.productDelete = function(req, res, next) {
  const _id = req.params._id;
  // product.createdAt = Date.now();
  // const productModel = new ProductModel(product);

  // res.status(200).json(new ResObj(true, 'FAKE !! Продукт видалено'));
  ProductModel.deleteOne({_id: ObjectId(_id)})
    .then(
      result => {

        if (result.n !== 1) {
          next(new ApplicationError('Не вдалося внести зміни', 400));
        } else {
          return res.status(200).json(new ResObj(true, 'Продукт видалено'));
        }
      },
      err => next(new DbError(err.message, err.code))
    );
};





module.exports.productAddBriefImage = function(req, res, next) {
  let form = new formidable.IncomingForm({maxFileSize: 15500000});
  form.parse(req, function(err, fields, files) {
    if (err) {
      return next(new ApplicationError('Помилка завантаження зображення - form parse', 400));
    }

    cloudinary.v2.uploader.upload(
      files.file.path,
      {
        public_id: 'menu_image_' + fields._id + '_' + Date.now(),// jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
        eager: [
          // {width: 650, height: 650, crop: 'fill', fetch_format: 'auto'},
          {width: 1100, height: 550, crop: 'fill', fetch_format: 'auto'},
          {width: 590, height: 295, crop: 'fill', fetch_format: 'auto'}, //2.12
          {width: 460, height: 230, crop: 'fill', fetch_format: 'auto'}, //2.12
          {width: 400, height: 200, crop: 'fill', fetch_format: 'auto'}, //2.12
          {width: 180, height: 180, crop: 'fill', fetch_format: 'auto'},
          // {width: 40, height: 40, crop: 'fill', fetch_format: 'auto'},
        ]
      },
      function(err, result) {
        if (err) {
          return next(
            new ApplicationError('Помилка завантаження - product assets', 400)
          );
        }
        console.log('product_img_cloudinary result', result);
        return res.status(200).json(new ResObj(true, 'Зображення завнтажене', result.public_id)); // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
      });
  });
};

module.exports.productAddAssets = function(req, res, next) {
  let form = new formidable.IncomingForm({maxFileSize: 10500000});
  form.parse(req, function(err, fields, files) {
    if (err) {
      return next(new ApplicationError('Помилка завантаження зображення - form parse', 400));
    }

    cloudinary.v2.uploader.upload(
      files.file.path,
      {
        public_id: fields._id + '_assets_' + Date.now(),// jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
        eager: [
          // {width: 650, height: 650, crop: 'fill', fetch_format: 'auto'},
          {width: 535, height: 350, crop: 'fill', fetch_format: 'auto'}, //1.53
          {width: 260, height: 170, crop: 'fill', fetch_format: 'auto'},
          {width: 180, height: 180, crop: 'fill', fetch_format: 'auto'},
          // {width: 40, height: 40, crop: 'fill', fetch_format: 'auto'},
        ]
      },
      function(err, result) {
        if (err) {
          return next(
            new ApplicationError('Помилка завантаження - product assets', 400)
          );
        }
        console.log('product_img_cloudinary result', result);
        return res.status(200).json(new ResObj(true, 'Зображення завнтажене', result.public_id)); // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
      });
  });
};

module.exports.productAddTechAssets = function(req, res, next) {
  let form = new formidable.IncomingForm({maxFileSize: 10500000});
  form.parse(req, function(err, fields, files) {
    if (err) {
      return next(new ApplicationError('Помилка завантаження зображення - form parse', 400));
    }

    cloudinary.v2.uploader.upload(
      files.file.path,
      {
        public_id: '_techassets_' + Date.now(),// jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
        eager: [
          {width: 200, height: 200, crop: 'fill', fetch_format: 'auto'}, //1
          {width: 180, height: 180, crop: 'fill', fetch_format: 'auto'},
          {width: 100, height: 100, crop: 'fill', fetch_format: 'auto'},
          {width: 55, height: 55, crop: 'fill', fetch_format: 'auto'},
        ]
      },
      function(err, result) {
        if (err) {
          return next(
            new ApplicationError('Помилка завантаження - product techassets', 400)
          );
        }
        console.log('product_img_cloudinary result', result);
        return res.status(200).json(new ResObj(true, 'Зображення завнтажене', result.public_id)); // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
      });
  });
};




// hmade
module.exports.productAddMainImage = function(req, res, next) {
  let form = new formidable.IncomingForm({maxFileSize: 10500000});
  form.parse(req, function(err, fields, files) {
    if (err) {
      return next(new ApplicationError('Помилка завантаження зображення - form parse', 400));
    }

    cloudinary.v2.uploader.upload(
      files.file.path,
      {
        public_id: 'main_image_' + fields._id + '_' + Date.now(),// jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
        eager: [
          {width: 535, height: 350, crop: 'fill', fetch_format: 'auto'},
          {width: 260, height: 170, crop: 'fill', fetch_format: 'auto'},
          {width: 180, height: 180, crop: 'fill', fetch_format: 'auto'},
        ]
      },
      function(err, result) {
        if (err) {
          return next(
            new ApplicationError('Помилка завантаження - product mainImage', 400)
          );
        }
        return res.status(200).json(new ResObj(true, 'Зображення завнтажене', result.public_id)); // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
      });
  });
};

module.exports.productUpsert = function(req, res, next) {
  const product = req.body;

  ProductModel.findOneAndUpdate(
    {_id: product._id},
    {$set: product},
    {upsert: true, new: true} // upsert + return updated object
  )
    .then(result => {
      return res.status(200).json(new ResObj(true, 'Колекцію додано/змінено', result));
    })
    .catch(err => next(new DbError()));
};

module.exports.getSkuList = function(req, res, next) {
  ProductModel.find({}, {_id: 1})
    .sort({_id: 1})
    .then(result => {
      return res.status(200).json(result);
    })
    .catch(err => next(new DbError()));
};

module.exports.getProductById = function(req, res, next) {
  const _id = req.query._id;
  const displayFilter = req.query.displayFilter;

  let query;
  displayFilter === 'true' ? query = {_id, display: true} : query = {_id};
  
  ProductModel.findById(query)
    .then(result => {
      return res.status(200).json(new ResObj(true, 'Товар', result));
    })
    .catch(err => next(new DbError())
    );
};

module.exports.getProductsByParent = function(req, res, next) {
  const parent = req.query.parent;
  const displayFilter = req.query.display;

  let query;
  displayFilter === 'true' ? query = {parents: parent, display: true} : query = {parents: parent};
  ProductModel.find(query)
    .sort({order: 1})
    .then(result => {
      return res.status(200).json(new ResObj(true, 'Продукти категорії' + parent, result));
    })
    .catch(err => next(new DbError())
    );
};