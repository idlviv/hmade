const ProductModel = require('../models/productModel');

const ResObj = require('../libs/responseObject');

const DbError = require('../errors/dbError');
const ApplicationError = require('../errors/applicationError');
const ObjectId = require('../config/mongoose').Types.ObjectId;
const formidable = require('formidable');
const util = require('util');
const log = require('../config/winston')(module);
const { libs } = require('user-man');
const catalogController = require('../controllers/catalogController');

module.exports.getProductsByDesignId = function(req, res, next) {
  // eslint-disable-line no-use-before-define
  const design_id = req.query.design_id;

  ProductModel.aggregate([
    {
      $match: {'designs': design_id, 'display': true},
    },
    {
      $project: {
        '_id': 1,
        'name': 1,
        'category_id': '$parent',
      },
    },
  ])
      .then((result) =>
        res.status(200).json(new ResObj(true, 'Масив _id продуктів', result))
      )
      .catch((err) => next(new DbError()));
};

function _getDescendants(parent, depth = 0) {
  return (req, res, next) => {
    return new Promise((resolve, reject) => {
      this.CatalogModel.aggregate([
        {
          $match: { parent },
        },
        {
          $sort: { order: 1 },
        },
        {
          $graphLookup: {
            from: 'catalogs',
            startWith: '$_id',
            connectFromField: '_id',
            connectToField: 'parent',
            as: 'children',
            maxDepth: depth,
          },
        },
        {
          $addFields: { numOfChildren: { $size: '$children' } },
        },
      ]).then((result) => resolve(result))
        .catch((err) => reject(new DbError()));
    });
  };
}

module.exports.getProducts = function(req, res, next) {
  let category = req.query.category;
  let categories = [];
  _getDescendants(category, 1)
      .then((result) => {
        if (result.length > 0) {
          categories = result.map(function(item) {
            return item._id;
          });
        } else {
          categories = [category];
        }
        ProductModel.find({categories: {$in: categories}})
            .sort({order: 1})
            .then((result) => {
              return res.status(200)
                  .json(new ResObj(true, 'Масив товарів', result));
            })
            .catch((err) => next(new DbError()));
      })
      .catch((err) => next(err));
};


module.exports.productAddImage = function(req, res, next) {
  let form = new formidable.IncomingForm({maxFileSize: 26215000});
  // form.on('file', function(file) {
  //   log.verbose('file - uploaded');
  // });
  form.parse(req, function(err, fields, files) {
    if (err) {
      return next(new ApplicationError(
          'Помилка завантаження зображення - form parse', 400
      ));
    }

    log.verbose('fields', fields);

    // log.verbose('files', files);
    log.verbose('date', Date.now());
    log.verbose('date-slice', String(Date.now()).slice(0, 7));

    libs.cloudinary.v2.uploader.upload(
        files.file.path,
        {
          public_id: 'product_' + fields.sku + '_' +
          Date.now(), // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
        // eager: [
        //   {width: 535, height: 350, crop: 'fill', fetch_format: 'auto'},
        //   {width: 260, height: 170, crop: 'fill', fetch_format: 'auto'},
        //   {width: 180, height: 180, crop: 'fill', fetch_format: 'auto'},
        // ],
        },
        function(err, result) {
          if (err) {
            return next(
                new ApplicationError(
                    'Помилка завантаження зображення - upload', 400
                )
            );
          }
          return res.status(200).json(
              new ResObj(true, 'Зображення завнтажене', result.public_id)
          );
        });
  });
};

// module.exports.productCreate = function(req, res, next) {
//   const product = req.body;
//   product.createdAt = Date.now();
//   const productModel = new ProductModel(product);

//   productModel.save()
//       .then(
//           (result) => {
//             return res.status(200).json(new ResObj(true, 'Виріб створений'));
//           },
//           (err) =>
//           // redirect to error handler
//             next(new DbError(err.message, err.code))
//       );
// };

// module.exports.productEdit = function(req, res, next) {
//   const product = req.body;
//   // product.createdAt = Date.now();
//   // const productModel = new ProductModel(product);

//   ProductModel.update({_id: new ObjectId(product._id)}, product)
//       .then(
//           (result) => {
//             if (result.nModified !== 1) {
//               next(new ApplicationError('Не вдалося внести зміни', 400));
//             } else {
//               return res.status(200).json(new ResObj(true, 'Зміни внесено'));
//             }
//           },
//           (err) => next(new DbError(err.message, err.code))
//       );
// };

module.exports.deleteProduct = function(req, res, next) {
  const _id = req.params._id;

  ProductModel.deleteOne({_id})
      .then(
          (result) => {
            if (result.n !== 1) {
              next(new DbError());
            } else {
              return res.status(200).json('Продукт видалено');
            }
          },
          (err) => next(new DbError())
      );
};

module.exports.productAddAssets = function(req, res, next) {
  let form = new formidable.IncomingForm({maxFileSize: 26215000});
  form.parse(req, function(err, fields, files) {
    if (err) {
      return next(new ApplicationError(
          'Помилка завантаження зображення - form parse', 400)
      );
    }

    libs.cloudinary.v2.uploader.upload(
        files.file.path,
        {
          public_id: fields._id + '_assets_' +
          Date.now(), // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
          eager: [
            {width: 535, height: 350, crop: 'fill', fetch_format: 'auto'},
            {width: 260, height: 170, crop: 'fill', fetch_format: 'auto'},
            {width: 180, height: 180, crop: 'fill', fetch_format: 'auto'},
          ],
        },
        function(err, result) {
          if (err) {
            return next(
                new ApplicationError(
                    'Помилка завантаження - product assets', 400
                )
            );
          }
          return res.status(200).json(
              new ResObj(true, 'Зображення завнтажене', result.public_id)
          ); // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
        });
  });
};

// hmade
module.exports.getMainPageProducts = function(req, res, next) {
  ProductModel.find({onMainPage: true})
      .then((result) =>
        res.status(200)
            .json(result)
      )
      .catch((err) => next(new DbError()));
};


module.exports.getNewProducts = function(req, res, next) {
  const limit = +req.query.limit;
  ProductModel.find({}).sort({updatedAt: -1}).limit(limit)
      .then((result) =>
        res.status(200).json(result)
      )
      .catch((err) => next(new DbError()));
};

module.exports.increaseViews = function(req, res, next) {
  const _id = req.query._id;

  ProductModel.findOneAndUpdate(
      {_id},
      {$inc: {views: 1}},
      {new: true} // return updated object
  )
      .then((result) => {
        return res.status(200).json(
            new ResObj(true, 'Кількість переглядів збільшено на 1', result)
        );
      })
      .catch((err) => next(new DbError()));
};

module.exports.productAddMenuImage = function(req, res, next) {
  let form = new formidable.IncomingForm({maxFileSize: 26215000});
  form.parse(req, function(err, fields, files) {
    if (err) {
      return next(
          new ApplicationError(
              'Помилка завантаження зображення - form parse', 400
          )
      );
    }

    libs.cloudinary.v2.uploader.upload(
        files.file.path,
        {
          public_id:
          'menu_image_' +
          fields._id + '_' +
          Date.now(),
          // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
          eager: [
            {width: 1100, height: 825, crop: 'fill', fetch_format: 'auto'},
            {width: 900, height: 675, crop: 'fill', fetch_format: 'auto'},
            {width: 590, height: 443, crop: 'fill', fetch_format: 'auto'},
            {width: 460, height: 345, crop: 'fill', fetch_format: 'auto'},
            {width: 400, height: 300, crop: 'fill', fetch_format: 'auto'},
            {width: 80, height: 60, crop: 'fill', fetch_format: 'auto'},
            {width: 180, height: 180, crop: 'fill', fetch_format: 'auto'},
          ],
        },
        function(err, result) {
          if (err) {
            return next(
                new ApplicationError(
                    'Помилка завантаження - product mainImage', 400
                )
            );
          }
          return res.status(200).json(
              new ResObj(true, 'Зображення завнтажене', result.public_id)
          ); // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
        });
  });
};

module.exports.productAddMainImage = function(req, res, next) {
  let form = new formidable.IncomingForm({maxFileSize: 26215000});
  form.parse(req, function(err, fields, files) {
    if (err) {
      return next(
          new ApplicationError(
              'Помилка завантаження зображення - form parse', 400
          )
      );
    }

    libs.cloudinary.v2.uploader.upload(
        files.file.path,
        {
          public_id:
          'main_image_' +
          fields._id + '_' +
          Date.now(),
          // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
          eager: [
            {width: 535, height: 350, crop: 'fill', fetch_format: 'auto'},
            {width: 260, height: 170, crop: 'fill', fetch_format: 'auto'},
            {width: 180, height: 180, crop: 'fill', fetch_format: 'auto'},
          ],
        },
        function(err, result) {
          if (err) {
            return next(
                new ApplicationError(
                    'Помилка завантаження - product mainImage', 400
                )
            );
          }
          return res.status(200).json(
              new ResObj(true, 'Зображення завнтажене', result.public_id)
          ); // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
        });
  });
};

module.exports.productUpsert = function(req, res, next) {
  const product = req.body;
  ProductModel.findOne({_id: product._id})
      .then((result) => {
        if (result !== null && result._doc) {
          product.updatedAt = Date.now();
        } else {
          product.createdAt = Date.now();
          product.updatedAt = Date.now();
        }
        return ProductModel.updateOne(
            {_id: product._id},
            {$set: product},
            {upsert: true}
        ); // upsert
      })
      .then((result) => {
        if (result.ok !== 1) {
          next(new DbError());
        }
        res.status(200).json('Зміни внесено');
      },
      (err) => next(new DbError())
      );
};

module.exports.getSkuList = function(req, res, next) {
  ProductModel.find({}, {_id: 1})
      .sort({_id: 1})
      .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => next(new DbError()));
};

module.exports.getProductById = function(req, res, next) {
  const _id = req.query._id;
  const displayFilter = req.query.displayFilter;
  const collection = req.query.collection;

  let query;
  displayFilter === 'true' ? query = {_id, display: true} : query = {_id};

  switch (collection) {
    case 'products':
      ProductModel.findById(query)
          .then((result) => res.status(200).json(
              new ResObj(true, 'Товар', result)
          ))
          .catch((err) => next(new DbError())
          );
      break;
    case 'mc':
      res.status(200).json(new ResObj(
          true, 'mc категорії', null)
      );
      break;
    default:
      return next(new ApplicationError('Немає такої колекції' + collection));
  }
};

module.exports.getProductsByParent = function(req, res, next) {
  const parent = req.query.parent;
  const displayFilter = req.query.display;
  const collection = req.query.collection;
  const sort = +req.query.sort || -1;
  const skip = +req.query.skip || 0;
  const limit = +req.query.limit || 12;

  let query;
  displayFilter === 'true' ?
    query = {parents: parent, display: true} : query = {parents: parent};

  switch (collection) {
    case 'products':
      ProductModel.aggregate([
        {
          $facet: {
            totalLength: [
              {$match: query},
              {$count: 'totalProductsLength'},
            ],
            products: [
              {$match: query},
              {$sort: {updatedAt: sort}},
              {$skip: skip},
              {$limit: limit},
            ],
          },
        },
        {
          $project: {
            total: {
              $arrayElemAt: ['$totalLength', 0],
            },
            products: 1,
          },
        },
      ])
          .then((result) => res.status(200).json(result))
          .catch((err) => next(new DbError()));
      break;
    case 'mc':
      res.status(200).json(new ResObj(
          true, 'mc категорії', null)
      );
      break;
    default:
      return next(new ApplicationError('Немає такої колекції ' + collection));
  }
};
