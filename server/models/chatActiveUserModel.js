const mongoose = require('../config/mongoose');
const Schema = mongoose.Schema;
const config = require('../config');

const ChatActiveUserSchema = new Schema({
  session_id: {
    type: String,
    required: true,
  },
  socket_id: {
    type: String,
    required: true,
  },
  // provider: {
  //   type: String,
  //   required: true,
  //   enum: ['local', 'google', 'facebook', 'chat'],
  // },
  // // users login or gid_xxxxxxxxxxxx, fid_xxxxxxxxxxxx,
  // login: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
  // avatar: {
  //   type: String,
  //   default: config.get('defaultAvatar'),
  // },
  // name: {
  //   type: String,
  //   required: true,
  //   default: function() {
  //     return this.login;
  //   },
  // },
  // surname: {
  //   type: String,
  //   required: true,
  //   default: '',
  // },
  // role: {
  //   type: String,
  //   enum: ['casual', 'guest', 'user', 'manager', 'admin', 'google', 'facebook'],
  //   default: 'casual',
  // },
  updatedAt: {
    type: Date,
    default: function() {
      return Date.now();
    },
  },
});

let chatActiveUserModel = mongoose.model('chatActiveUsers', ChatActiveUserSchema);
module.exports = chatActiveUserModel;
