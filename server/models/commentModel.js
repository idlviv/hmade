const mongoose = require('../config/mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  comment: {
    type: String,
  },
  commentator: {
    type: ObjectId,
  },
  commentedAt: {
    type: Number,
    default: 0,
  },
  display: {
    type: Boolean,
    default: false,
  },
});

let CommentModel = mongoose.model('comments', CommentSchema);

module.exports = CommentModel;
module.exports.CommentSchema = CommentSchema;
