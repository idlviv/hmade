const CatalogModel = require('../models/catalogModel');
const ResObj = require('../libs/responseObject');
const DbError = require('../errors/dbError');
const ApplicationError = require('../errors/applicationError');
const ObjectId = require('../config/mongoose').Types.ObjectId;
const log = require('../config/winston')(module);

module.exports.getMainMenu = function(req, res, next) {
  // const item = ObjectId(req.query.item);
  // item = req.query.item;
  // console.log('item', item);
  CatalogModel.aggregate([
    {
      $facet: {
        common: [
          {
            $match: {parent: 'common'},
          },
          {
            $sort: {order: 1},
          },
        ],
        system: [
          {
            $match: {parent: 'system'},
          },
          {
            $sort: {order: 1},
          },
        ],
      },
    },
  ]).then((result) => {
    return res.status(200).json(new ResObj(true, 'Каталог', result[0]));
  })
      .catch((error) => next(new DbError()));
};

// New

module.exports.getAllParents = function(req, res, next) {
  const category_id = req.query.category_id;
  CatalogModel.aggregate([
    {
      $match: {_id: category_id},
    },
    {
      $sort: {order: 1},
    },
    {
      $graphLookup: {
        from: 'catalogs',
        startWith: '$parent',
        connectFromField: 'parent',
        connectToField: '_id',
        as: 'hierarchy',
        // depthField: 'depthField'
      },
    },
    {
      $unwind: '$hierarchy',
    },
    {
      $addFields: {sizeOfAncestors: {$size: '$hierarchy.ancestors'}},
    },
    {
      $sort: {sizeOfAncestors: 1},
    },
    {
      $group:
          {_id: '$_id',
            hierarchy: {$push: '$hierarchy'},
            name: {$first: '$name'},
          },
    },
  ]).then((result) => res.status(200).json(result[0]))
      .catch((err) => next(new DbError()));
};

// hmade

module.exports.getPrefix = function(req, res, next) {
  const _id = req.query._id;
  CatalogModel.findOne({_id}, {prefix: 1, _id: 0})
      .then((result) => {
        return res.status(200).json(new ResObj(true, 'Префікс', result));
      })
      .catch((err) => next(new DbError()));
};

module.exports.getSiblings = function(req, res, next) {
  const _id = req.query._id;
  CatalogModel.aggregate([
    {
      $match: {_id: 'toys'},
    },
    {
      $graphLookup: {
        from: 'catalogs',
        startWith: '$parent',
        connectToField: 'parent',
        connectFromField: '_id',
        as: 'siblings',
        maxDepth: 0,
      },
    },
    {
      $unwind: '$siblings',
    },
    {
      $replaceRoot: {newRoot: '$siblings'},
    },
    {
      $sort: {order: 1},
    },
  ])
      .then((result) => {
        return res.status(200).json(new ResObj(true, 'Siblings', result));
      })
      .catch((err) => next(new DbError()));
};

_getDescendants = function(parent, depth = 0) {
  return new Promise(function(resolve, reject) {
    CatalogModel.aggregate([
      {
        $match: {parent},
      },
      {
        $sort: {order: 1},
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
        $addFields: {numOfChildren: {$size: '$children'}},
      },
    ]).then((result) => resolve(result))
        .catch((err) => reject(new DbError()));
  });
};
module.exports._getDescendants = _getDescendants;

module.exports.getDescendants = function(req, res, next) {
  const parent = req.query.parent;
  const depth = +req.query.depth;
  _getDescendants(parent, depth)
      .then((result) => {
        return res.status(200).json(new ResObj(true, 'Каталог', result));
      })
      .catch((err) => next(err));
};

module.exports.getCategoryById = function(req, res, next) {
  const _id = req.query._id;
  CatalogModel.findOne({_id})
      .then((result) => {
        return res.status(200).json(new ResObj(true, 'Категорія', result));
      })
      .catch((err) => next(new DbError()));
};

module.exports.getChildren = function(req, res, next) {
  parent = req.query.parent;
  CatalogModel.aggregate([
    {
      $match: {parent},
    },
    {
      $sort: {order: 1},
    },
  ]).then((result) => {
    return res.status(200).json(new ResObj(true, 'Каталог', result));
  })
      .catch((err) => next(new DbError()));
};
