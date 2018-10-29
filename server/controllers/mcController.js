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

module.exports.getMcs = function(req, res, next) { // tmp
  McModel.find()
      .then((result) =>
        res.status(200)
            .json(new ResObj(true, 'Масив товарів', result)))
      .catch((err) => next(new DbError()));
};

module.exports.getMcsByFilter = function(req, res, next) {
  const parent = req.query.parent;
  const sort = req.query.sort;
  const sortOrder = +req.query.sortOrder;
  const skip = +req.query.skip;
  const limit = +req.query.limit;
  const noMoreChildren = req.query.noMoreChildren === 'true';
  log.debug('req.query', req.query);

  if (noMoreChildren) {
    McModel
        .find({parents: parent})
        .sort({[sort]: sortOrder})
        .skip(skip)
        .limit(limit)
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
            $replaceRoot:
        {newRoot: '$data'},
          },
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
  const collection = req.query.collection;

  let query;
  displayFilter === 'true' ?
      query = {parents: parent, display: true} : query = {parents: parent};

  log.debug('col', collection === 'mcs');
  switch (collection) {
    case 'products':
      ProductModel.find(query)
          .sort({order: 1})
          .then((result) =>
            res.status(200).json(new ResObj(
                true, 'Продукти категорії' + parent, result)
            ))
          .catch((err) => next(new DbError())
          );
      break;
    case 'mcs':
      McModel.find(query)
          .sort({order: 1})
          .then((result) =>
            res.status(200).json(new ResObj(
                true, 'Майстеркласи категорії' + parent, result)
            ))
          .catch((err) => next(new DbError())
          );
      break;
    default:
      return next(new ApplicationError('Немає такої колекції ' + collection));
  }
};
