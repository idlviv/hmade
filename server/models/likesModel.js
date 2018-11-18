const mongoose = require('../config/mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

const LikesSchema = new Schema({
  likedBy: {
    type: [ObjectId],
  },
  dislikedBy: {
    type: [ObjectId],
  },
});

let LikesModel = mongoose.model('likes', LikesSchema);

module.exports = LikesModel;
module.exports.LikesSchema = LikesSchema;
