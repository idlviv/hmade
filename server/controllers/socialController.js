const McModel = require('../models/mcModel');
const DbError = require('../errors/dbError');
const ApplicationError = require('../errors/applicationError');
const ObjectId = require('../config/mongoose').Types.ObjectId;
const log = require('../config/winston')(module);


module.exports.deleteComment = function(req, res, next) {
  const parent_id = req.query.parent_id;
  const parentCategory = req.query.parentCategory;
  const comment_id = req.query.comment_id;
  let model;
  if (parentCategory === 'mc') {
    model = McModel;
  }
  model.findOneAndUpdate(
      {_id: parent_id},
      {$pull: {comments: {_id: comment_id}}}
  )
      .then((result) =>res.status(200).json(true))
      .catch((err) => next(new DbError(err.message)));

};

module.exports.addComment = function(req, res, next) {
  const parent_id = req.body.parent_id;
  const parentCategory = req.body.parentCategory;
  const comment = req.body.comment;
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
            commentator: new ObjectId(commentator),
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

// set display (true || false) option for comment
module.exports.displayComment = function(req, res, next) {
  const parent_id = req.body.parent_id;
  const parentCategory = req.body.parentCategory;
  const comment_id = req.body.comment_id;
  const display = req.body.display;
  console.log('display', display);
  let model;
  if (parentCategory === 'mc') {
    model = McModel;
  }
  model.findOneAndUpdate(
      {'_id': parent_id, 'comments._id': new ObjectId(comment_id)},
      {$set: {'comments.$.display': display}},
      {
        new: true,
      } // return the modified document rather than the original
  )
      .then((result) => res.status(200).json(true))
      .catch((err) => next(new DbError(err.message)));
};

module.exports.likesSet = function(req, res, next) {
  const parent_id = req.body.parent_id;
  const parentCategory = req.body.parentCategory;
  // action is true for like, is false for dislike
  const actionAdd = req.body.action ? 'likes.likedBy' : 'likes.dislikedBy';
  const actionRemove = !req.body.action ? 'likes.likedBy' : 'likes.dislikedBy';
  const user_id = req.user._doc._id;

  let model;
  if (parentCategory === 'mc') {
    model = McModel;
  }
  model.findOneAndUpdate(
      {'_id': parent_id},
      {
        $addToSet: {[actionAdd]: user_id},
        $pull: {[actionRemove]: user_id},
      }
  )
      .then((result) => {
        res.status(200).json(true);
      })
      .catch((err) => next(new DbError(err.message)));
};


module.exports.getComments = function(req, res, next) {
  const parent_id = req.query.parent_id;
  const parentCategory = req.query.parentCategory;
  const sort = +req.query.sort;
  const skip = +req.query.skip;
  const limit = +req.query.limit;
  const displayFilter = req.query.displayFilter;
  let query;
  displayFilter === 'true' ? query = {display: true} : query = {};

  let model;
  if (parentCategory === 'mc') {
    model = McModel;
  }

  model.aggregate([
    {$match: {_id: parent_id}},
    {$project: {_id: 0, comments: 1, numberOfComments: {$size: '$comments'}}},
    {$unwind: '$comments'},
    {$replaceRoot: {newRoot: '$comments'}},
    {$match: query},
    {$facet: {
      'comments': [
        {$sort: {commentedAt: sort}},
        {$skip: skip},
        {$limit: limit},
        {$lookup: {
          from: 'users',
          localField: 'commentator',
          foreignField: '_id',
          as: 'user',
        }},
        {$project: {
          'commentedAt': 1,
          'display': 1,
          'comment': 1,
          'commentator': 1,
          'user': {$arrayElemAt: ['$user', 0]},
        }},
        {$project: {
          'commentedAt': 1,
          'display': 1,
          'comment': 1,
          'commentator': 1,
          'user.avatar': 1,
          'user.role': 1,
          'user.login': 1,
        }},
      ],
      'count': [
        {$sortByCount: '$comments'},
      ],
    }},
    {$project: {
      'comments': 1,
      'count': {$arrayElemAt: ['$count', 0]},
    }},
    {$project: {
      'comments': 1,
      'commentsTotalLength': '$count.count',
    }},
  ])
      .then((result) => res.status(200).json(result[0]))
      .catch((err) => next(new DbError(err.message)));
};

