// const mongoose = require('../config/mongoose');
// const Schema = mongoose.Schema;
// const config = require('../config');

// const ChatActiveUserSchema = new Schema({
//   session_id: {
//     type: String,
//     required: true,
//   },
//   socket_id: {
//     type: String,
//     required: true,
//   },
//   updatedAt: {
//     type: Date,
//     default: function() {
//       return Date.now();
//     },
//   },
// });

// ChatActiveUserSchema.pre('save', function(next) {
//   this.updatedAt = Date.now();
//   next();
// });

// let chatActiveUserModel = mongoose.model('chatActiveUsers', ChatActiveUserSchema);
// module.exports = chatActiveUserModel;
