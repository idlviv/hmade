const UserModel = require('../models/userModel');
const userMan = require('user-man').config;
const config = require('./');
const express = require('express');
const router = express.Router();
const ObjectId = require('../config/mongoose').Types.ObjectId;

const options = {
  permissions: config.get('permissions'),
  JWTSecret: config.get('JWT_SECRET'),
  JWTSecretCode: config.get('JWT_SECRET_CODE'),
  JWTSecretChangePassword: config.get('JWT_SECRET_CHANGE_PASSWORD'),
  JWTEmail: config.get('JWT_EMAIL'),
  cookieName: 'hmade',
  recaptchaSecret: config.get('RECAPTCHA_SECRET'),
  UserModel,
  ObjectId,
  router,
  emailUser: config.get('EMAIL_USER'),
  emailPassword: config.get('EMAIL_PASS'),
  googleClientID: config.get('GOOGLE_CLIENT_ID'),
  googleClientSecret: config.get('GOOGLE_CLIENT_SECRET'),
  googleCallbackURL: config.get('SERVER_URL'),
};

userMan.init(options);
