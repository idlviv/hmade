const UserModel = require('../models/userModel');
const userMan = require('user-man').config;
const config = require('./');
const express = require('express');
const router = express.Router();
const ObjectId = require('../config/mongoose').Types.ObjectId;

const options = {
  permissions: config.get('permissions'),
  JWTSecret: config.get('JWT_SECRET'),
  cookieName: 'hmade',
  recaptchaSecret: config.get('RECAPTCHA_SECRET'),
  UserModel,
  ObjectId,
  router,
};

userMan.init(options);
