const mongoose = require('../config/mongoose');
const Schema = mongoose.Schema;

const CommentSchema = require('./commentModel').CommentSchema;

const McSchema = new Schema({
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
  materials: {
    name: {
      type: String,
    },
    quantity: {
      type: Number,
    },
    units: {
      type: String,
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

let McModel = mongoose.model('mcs', McSchema);
module.exports = McModel;
