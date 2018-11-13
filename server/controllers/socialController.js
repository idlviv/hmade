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

  log.debug('comment', comment);
  log.debug('parent_id', parent_id);
  log.debug('parentCategory', parentCategory);

  res.status(200).json({comment, parent_id, parentCategory});
};
