const McModel = require('../models/mcModel');

const ResObj = require('../libs/responseObject');

const DbError = require('../errors/dbError');
const ApplicationError = require('../errors/applicationError');
const ObjectId = require('../config/mongoose').Types.ObjectId;
const formidable = require('formidable');
const util = require('util');
const log = require('../config/winston')(module);
const cloudinary = require('../config/cloudinary');
const catalogController = require('../controllers/catalogController');

module.exports.getMcs = function(req, res, next) {
  McModel.find()
      .then((result) =>
        res.status(200)
            .json(new ResObj(true, 'Масив товарів', result)))
      .catch((err) => next(new DbError()));


//   let category = req.query.category;
//   let categories = [];
//   catalogController._getDescendants(category, 1)
//       .then((result) => {
//         if (result.length > 0) {
//           categories = result.map(function(item) {
//             return item._id;
//           });
//         } else {
//           categories = [category];
//         }
//         ProductModel.find({categories: {$in: categories}})
//             .sort({order: 1})
//             .then((result) => {
//               return res.status(200)
//                   .json(new ResObj(true, 'Масив товарів', result));
//             })
//             .catch((err) => next(new DbError()));
//       })
//       .catch((err) => next(err));
};
