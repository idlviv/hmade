const UserModel = require('../models/userModel');
const userMan = require('user-man').config;
const config = require('./');

const options = {
  permissions: config.get('permissions'),
  JWTSecret: config.get('JWT_SECRET'),
  cookieName: 'hmade',
  recaptchaSecret: config.get('RECAPTCHA_SECRET'),
  UserModel,
};

userMan.init(options);
