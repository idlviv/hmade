const mongoose = require('../config/mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  comment: {
    type: String,
  },
  commentator: {
    type: String,
  },
  commentedAt: {
    type: Number,
    default: 0,
  },
});

let CommentModel = mongoose.model('comments', CommentSchema);

module.exports = CommentModel;
module.exports.CommentSchema = CommentSchema;
