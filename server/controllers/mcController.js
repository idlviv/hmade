const McModel = require('../models/mcModel');
const CatalogModel = require('../models/catalogModel');

const ResObj = require('../libs/responseObject');

const DbError = require('../errors/dbError');
const ApplicationError = require('../errors/applicationError');
const ObjectId = require('../config/mongoose').Types.ObjectId;
const formidable = require('formidable');
const util = require('util');
const log = require('../config/winston')(module);
const cloudinary = require('../config/cloudinary');
const catalogController = require('../controllers/catalogController');
const sharedController = require('../controllers/sharedController');

// module.exports.getMcs = function(req, res, next) { // tmp
//   McModel.find()
//       .then((result) =>
//         res.status(200)
//             .json(new ResObj(true, 'Масив товарів', result)))
//       .catch((err) => next(new DbError()));
// };

module.exports.mcUpsert = function(req, res, next) {
  const mc = req.body;

  McModel.findOne({_id: mc._id})
      .then((result) => {
        if (result !== null && result._doc) {
          mc.createdAt = result.createdAt || 0;
          mc.updatedAt = Date.now();
          mc.likes = {
            likedBy: result.likes && result.likes.likedBy ? result.likes.likedBy : [],
            dislikedBy: result.likes && result.likes.dislikedBy ? result.likes.dislikedBy : [],
          };
          mc.views = result.views || 0;
          // mc.comments = result.comments || [];
        } else {
          mc.createdAt = Date.now();
          mc.updatedAt = Date.now();
        }

        return McModel.findOneAndUpdate(
            {_id: mc._id},
            {$set: mc},
            {upsert: true, new: true}
        ); // upsert + return updated object)
      })
      .then((result) => res.status(200).json(
          new ResObj(true, 'Майстерклас додано/змінено', result)
      ))
      .catch((err) => next(new DbError(err)));
};

module.exports.addMainImage = function(req, res, next) {
  let form = new formidable.IncomingForm({maxFileSize: 10500000});
  form.parse(req, function(err, fields, files) {
    if (err) {
      return next(
          new ApplicationError(
              'Помилка завантаження зображення - form parse', 400
          )
      );
    }

    cloudinary.v2.uploader.upload(
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
          return res.status(200).json(result.public_id);
          // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
        });
  });
};

module.exports.addStepsPic = function(req, res, next) {
  let form = new formidable.IncomingForm({maxFileSize: 10500000});
  form.parse(req, function(err, fields, files) {
    if (err) {
      return next(
          new ApplicationError(
              'Помилка завантаження зображення - form parse', 400
          )
      );
    }

    cloudinary.v2.uploader.upload(
        files.file.path,
        {
          public_id:
              'steps_pic_' +
              fields._id + '_' +
              Date.now(),
          // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
          eager: [
            {width: 535, height: 350, crop: 'fill', fetch_format: 'auto'},
            {width: 260, height: 170, crop: 'fill', fetch_format: 'auto'},
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
          return res.status(200).json(result.public_id);
          // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
        });
  });
};

module.exports.getSkuList = function(req, res, next) {
  McModel.find({}, {_id: 1})
      .sort({_id: 1})
      .then((result) => {
        return res.status(200).json(result);
      })
      .catch((err) => next(new DbError()));
};

module.exports.getMcById = function(req, res, next) {
  const _id = req.params._id;
  McModel.findById({_id})
      .then((result) =>
        res.status(200).json(result))
      .catch((err) => next(new DbError()));
};

module.exports.getMcByIdAndIncViews = function(req, res, next) {
  const _id = req.params._id;
  const user_id = req.user_id;

  McModel.findOneAndUpdate({_id}, {$inc: {views: 1}})
      .then(() => McModel.aggregate([
        {$match: {_id},
        },
        {$addFields: {
          comments: {
            $filter: {
              input: '$comments',
              as: 'comment',
              cond: {$eq: ['$$comment.display', true]},
            },
          },
        },
        },
        {$addFields: {
          'likes.likedByLength': {$size: '$likes.likedBy'},
          'likes.dislikedByLength': {$size: '$likes.dislikedBy'},
        },
        },
        {$addFields:
          {'likes.canLike': {$cond: [
            {$setIsSubset: [[new ObjectId(user_id)], '$likes.likedBy']},
            false,
            true,
          ]},
          'likes.canDislike': {$cond: [
            {$setIsSubset: [[new ObjectId(user_id)], '$likes.dislikedBy']},
            false,
            true,
          ]}},
        },
        {$project: {
          'likes.likedBy': 0,
          'likes.dislikedBy': 0,
        }},
      ]))
      .then((result) => res.status(200).json(result[0]))
      .catch((err) => next(new DbError()));
};

module.exports.getMcsByFilter = function(req, res, next) {
  const parent = req.query.parent;
  const sort = req.query.sort;
  const sortOrder = +req.query.sortOrder;
  const skip = +req.query.skip;
  const limit = +req.query.limit;
  const noMoreChildren = req.query.noMoreChildren === 'true';
  const user_id = req.user_id;
  log.debug('user', user_id);
  if (noMoreChildren) {
    McModel
        .aggregate([
          {$match: {parents: parent},
          },
          {$addFields: {
            comments: {
              $filter: {
                input: '$comments',
                as: 'comment',
                cond: {$eq: ['$$comment.display', true]},
              },
            },
          },
          },
          {$addFields: {
            'likes.likedByLength': {$size: '$likes.likedBy'},
            'likes.dislikedByLength': {$size: '$likes.dislikedBy'},
          },
          },
          {$addFields:
            {'likes.canLike': {$cond: [
              {$setIsSubset: [[user_id], '$likes.likedBy']},
              false,
              true,
            ]},
            'likes.canDislike': {$cond: [
              {$setIsSubset: [[user_id], '$likes.dislikedBy']},
              false,
              true,
            ]}},
          },
          {$project: {
            'likes.likedBy': 0,
            'likes.dislikedBy': 0,
          }},
          {$sort: {[sort]: sortOrder}},
          {$skip: skip},
          {$limit: limit},
        ])
        .then((result) => res.status(200).json(result))
        .catch((err) => next(new DbError()));
  } else {
    CatalogModel
        .aggregate([
          // find all catalog elements where inside ancesors is parent category
          {
            $match: {ancestors: parent},
          },
          // find all docs in 'collection' which belong to matched catalog docs
          {
            $lookup: {
              from: 'mcs',
              localField: '_id',
              foreignField: 'parents',
              as: 'tmp',
            },
          },
          // purge unnecessary fields
          {
            $project: {
              tmp: 1,
              _id: 0,
            },
          },
          {$unwind: '$tmp'},
          // remove duplicates
          {
            $group: {
              _id: null, data: {$addToSet: '$tmp'},
            },
          },
          {
            $unwind: '$data',
          },
          // move docs to root
          {
            $replaceRoot: {newRoot: '$data'},
          },
          {$addFields: {
            comments: {
              $filter: {
                input: '$comments',
                as: 'comment',
                cond: {$eq: ['$$comment.display', true]},
              },
            },
          }},
          {$addFields: {
            'likes.likedByLength': {$size: '$likes.likedBy'},
            'likes.dislikedByLength': {$size: '$likes.dislikedBy'},
          },
          },
          {$addFields:
            {'likes.canLike': {$cond: [
              {$setIsSubset: [[user_id], '$likes.likedBy']},
              false,
              true,
            ]},
            'likes.canDislike': {$cond: [
              {$setIsSubset: [[user_id], '$likes.dislikedBy']},
              false,
              true,
            ]}},
          },
          {$project: {
            'likes.likedBy': 0,
            'likes.dislikedBy': 0,
          }},
          {
            $sort: {[sort]: sortOrder},
          },
          {
            $skip: skip,
          },
          {
            $limit: limit,
          },
        ])
        .then((result) => res.status(200).json(result))
        .catch((err) => next(new DbError()));
  }
};

module.exports.getMcsByParent = function(req, res, next) {
  const parent = req.query.parent;
  const displayFilter = req.query.display;
  let query;
  displayFilter === 'true' ?
      query = {parents: parent, display: true} : query = {parents: parent};
  McModel.find(query)
      .sort({order: 1})
      .then((result) => res.status(200).json(result))
      .catch((err) => next(new DbError())
      );
};
