const McModel = require('../models/mcModel');
const CatalogModel = require('../models/catalogModel');
const DbError = require('../errors/dbError');
const ApplicationError = require('../errors/applicationError');
const ObjectId = require('../config/mongoose').Types.ObjectId;
const log = require('../config/winston')(module);
const cloudinary = require('../config/cloudinary');

module.exports.addComment = function(req, res, next) {
  const comment = req.body.comment;
  const parent_id = req.body.parent_id;
  const parentCategory = req.body.parentCategory;
  const commentator = req.user._doc._id;

  let model;
  if (parentCategory === 'mc') {
    model = McModel;
  }
  model.findOneAndUpdate(
      {_id: parent_id},
      {$push:
        {comments:
          {
            comment,
            commentator,
            commentedAt: Date.now(),
            display: true,
          }}},
      {
        new: true,
      } // return the modified document rather than the original
  )
      .then((result) => res.status(200).json(true))
      .catch((err) => next(new DbError(err.message)));
};

module.exports.getComments = function(req, res, next) {
  const parent_id = req.query.parent_id;
  const sort = +req.query.sort;
  const skip = +req.query.skip;
  const limit = +req.query.limit;
  const displayFilter = req.query.displayFilter;
  log.debug('displayFilter', limit);
  let query;
  displayFilter === 'true' ? query = {parent_id, display: true} : query = {_id};

  McModel.aggregate([
    {$match: query},
    {$project: {_id: 0, comments: 1}},
    {$unwind: '$comments'},
    {$replaceRoot: {newRoot: '$comments'}},
    {$sort: {commentedAt: sort}},
    {$skip: skip},
    {$limit: limit},
  ])
      .then((result) => res.status(200).json(result))
      .catch((err) => next(new DbError(err.message)));
};
