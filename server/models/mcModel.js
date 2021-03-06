const mongoose = require('../config/mongoose');
const Schema = mongoose.Schema;

const CommentSchema = require('./commentModel').CommentSchema;
const LikesSchema = require('./likesModel').LikesSchema;

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
  pics: {
    type: [String],
  },
  materials: [
    {
      name: {
        type: String,
      },
      value: {
        type: String,
      },
      units: {
        type: String,
      },
    },
  ],
  steps: {
    required: true,
    type: [
      {
        pic: {
          type: String,
        },
        description: {
          type: String,
        },
      },
    ],
  },
  createdAt: {
    type: Number,
    default: 0,
  },
  updatedAt: {
    type: Number,
    default: 0,
  },
  likes: LikesSchema,
  views: {
    type: Number,
    default: 0,
  },
  comments: [CommentSchema],
});

let McModel = mongoose.model('mcs', McSchema);
module.exports = McModel;
