const config = require('../config');
const cloudinary = require('../config/cloudinary');
// let UploadModel = require('../models/uploadModel');
// let UserModel = require('../models/userModel');
const formidable = require('formidable');
util = require('util');
const ApplicationError = require('../errors/applicationError');
const userController = require('./userController');


module.exports.userEditAvatar = function(req, res, next) {
  let form = new formidable.IncomingForm({maxFileSize: 8400000});
  form.parse(req, function(err, fields, files) {
    if (err) {
      console.log(err);
      return next(new ApplicationError('Помилка завантаження аватара - form parse', 400));
    }

    let moderator = {};
    Object.assign(moderator, req.user._doc);

    cloudinary.v2.uploader.upload(
        files.file.path,
        {
          public_id: 'avatar_' + moderator._id, // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
          eager: [
            {width: 180, height: 180, crop: 'fill', fetch_format: 'auto'},
            {width: 50, height: 50, crop: 'fill', fetch_format: 'auto'},
          ],
        },
        function(err, result) {
          if (err) {
            return next(
                new ApplicationError('Помилка завантаження аватара - uploadController: ' + err.message, err.http_code)
            );
          }
          let modificationRequest = {
            name: 'avatar',
            value: result.public_id, // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
            password: null,
          };

          userController.updateUserField(moderator, modificationRequest)
              .then(
                  (result) => res.status(200).json(result),
                  (err) => next(err)
              );
        });
  });
};
