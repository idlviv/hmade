const mongoose = require('../config/mongoose');
const Schema = mongoose.Schema;

const CommentSchema = require('./commentModel').CommentSchema;

const ProductSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  parents: {
    type: [String],
    required: true,
  },
  display: {
    type: Boolean,
    required: true,
    default: true,
  },
  onMainPage: {
    type: Boolean,
    required: true,
    default: false,
  },
  mainImage: {
    type: String,
    required: true,
  },
  menuImage: {
    type: String,
    required: true,
  },
  assets: {
    type: [String],
  },
  price: {
    type: Number,
  },
  discount: {
    type: Number,
  },
  dimensions: {
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
  },
  createdAt: {
    type: Number,
    default: 0,
  },
  updatedAt: {
    type: Number,
    default: 0,
  },
  likes: {
    type: Number,
    default: 0,
  },
  likedBy: {
    type: [String],
  },
  dislikes: {
    type: Number,
    default: 0,
  },
  dislikedBy: {
    type: [String],
  },
  views: {
    type: Number,
    default: 0,
  },
  comments: [CommentSchema],
});

let ProductModel = mongoose.model('products', ProductSchema);
module.exports = ProductModel;
