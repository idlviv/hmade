const mongoose = require('../config/mongoose');
const Schema = mongoose.Schema;
const config = require('../config');

const CatalogSchema = new Schema({
  _id: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    required: true,
  },
  ancestors: {
    type: [String],
    required: true,
  },
  parent: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  menuImage: {
    type: [String],
    default: config.get('defaultProductImgPath'),
  },
  prefix: {
    type: String,
  }
});

let CatalogModel = mongoose.model('catalogs', CatalogSchema);
module.exports = CatalogModel;
