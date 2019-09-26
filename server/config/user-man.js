const UserModel = require('../models/userModel');
const { config, libs } = require('user-man');
const appConfig = require('./');
const express = require('express');
const router = express.Router();
const ObjectId = require('../config/mongoose').Types.ObjectId;

const options = {
  permissions: appConfig.get('permissions'),
  JWTSecret: appConfig.get('JWT_SECRET'),
  JWTSecretCode: appConfig.get('JWT_SECRET_CODE'),
  JWTSecretChangePassword: appConfig.get('JWT_SECRET_CHANGE_PASSWORD'),
  JWTEmail: appConfig.get('JWT_EMAIL'),
  cookieName: 'hmade',
  recaptchaSecret: appConfig.get('RECAPTCHA_SECRET'),
  UserModel,
  ObjectId,
  router,
  emailUser: appConfig.get('EMAIL_USER'),
  emailPassword: appConfig.get('EMAIL_PASS'),
  googleClientID: appConfig.get('GOOGLE_CLIENT_ID'),
  googleClientSecret: appConfig.get('GOOGLE_CLIENT_SECRET'),
  googleCallbackURL: appConfig.get('SERVER_URL'),
  cloudinaryName: appConfig.get('CLOUDINARY_NAME'),
  cloudinaryKey: appConfig.get('CLOUDINARY_KEY'),
  cloudinarySecret: appConfig.get('CLOUDINARY_SECRET'),
  mailOptionsEmailVerification: {
    from: 'Hmade <noreply@hmade.work>',
    subject: 'Підтвердіть пошту',
    text: 'Будь ласка, перейдіть за посиланням ',
    html: '<b>Будь ласка, перейдіть за посиланням </b>',
  },
  mailOptionsResetPassword: {
    from: 'HandMADE <postmaster@hmade.work>',
    subject: 'Зміна пароля, код підтвердження',
    text: 'Ваш код підтвердження: ',
    html: '<b>Ваш код підтвердження: </b>',
  },
};

// set intial configuration of user-man
config.init(options);

// configure libs according to intial configuration of user-man
libs.config();
