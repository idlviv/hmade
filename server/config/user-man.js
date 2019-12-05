const appConfig = require('./');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const userMan = require('user-man');
const { Config, Libs } = userMan;

module.exports = (function() {
  const options = {
    mongoose, // pass mongoose
    router, // pass router
    frontendCookieName: 'hmade', // frontend auth cookie
    sessionCookieKey: appConfig.get('sessionSid'),
    sessionCookieSecret: appConfig.get('SESSION_SECRET'),
    googleSignin: true, // use google strategy
    cookieCsrfOptions: appConfig.get('cookieCsrfOptions'),
    defaultAvatar: appConfig.get('defaultAvatar'),
    permissions: appConfig.get('permissions'),
    JWTSecret: appConfig.get('JWT_SECRET'),
    JWTSecretCode: appConfig.get('JWT_SECRET_CODE'),
    JWTSecretChangePassword: appConfig.get('JWT_SECRET_CHANGE_PASSWORD'),
    JWTEmail: appConfig.get('JWT_EMAIL'),
    recaptchaSecret: appConfig.get('RECAPTCHA_SECRET'),
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
      from: 'HandMADE <noreply@hmade.work>',
      subject: 'Зміна пароля, код підтвердження',
      text: 'Ваш код підтвердження: ',
      html: '<b>Ваш код підтвердження: </b>',
    },
    mailOptionsQuestionFromSite: {
      from: 'HMade <questionfromsite@hmade.work>',
      to: 'info@hmade.work',
      subject: 'Питання з сайту',
      text() {
        return {
          content: `Питання ${this.message}. Контакти ${this.contacts}. Ім\'я ${this.name}`,
        };
      },
      html() {
        return {
          content:
            `<p><span style="font-weight: bold;">Питання: </span>
          ${this.message} </p>
          <p><span style="font-weight: bold">Контакти: </span>
          ${this.contacts} </p>
          <p><span style="font-weight: bold">Ім\'я: </span>
          ${this.name} </p>`,
        };
      },

    },
  };

  // set intial configuration of user-man
  const config = new Config();
  config.init(options);
  // configure libs according to intial configuration of user-man
  const libs = new Libs();
  libs.config();
  return userMan;
})();
