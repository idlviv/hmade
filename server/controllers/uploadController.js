const config = require('../config');
const cloudinary = require('../config/cloudinary');
// let UploadModel = require('../models/uploadModel');
// let UserModel = require('../models/userModel');
const formidable = require('formidable');
util = require('util');
const ApplicationError = require('../errors/applicationError');
const ServerError = require('../errors/serverError');
const userHelper = require('../helpers/userHelper');


module.exports.userEditAvatar = function(req, res, next) {
  let form = new formidable.IncomingForm({maxFileSize: 8400000});
  form.parse(req, function(err, fields, files) {
    if (err) {
      console.log(err);
      return next(new ServerError({message: 'Помилка завантаження аватара - form parse', status: 400}));
    }

    let user = {};
    Object.assign(user, req.user._doc);

    cloudinary.v2.uploader.upload(
        files.file.path,
        {
          public_id: 'avatar_' + user._id, // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
          eager: [
            {width: 180, height: 180, crop: 'fill', fetch_format: 'auto'},
            {width: 50, height: 50, crop: 'fill', fetch_format: 'auto'},
          ],
        },
        function(err, result) {
          if (err) {
            return next(
                new ServerError({message: 'Помилка завантаження аватара - cloudinary', status: err.http_code})
            );
          }
          // let modificationRequest = {
          //   name: 'avatar',
          //   value: result.public_id, // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
          //   password: null,
          // };

          userHelper.updateDocument(
              {_id: user._id},
              {$set: {
                avatar: result.public_id,
              }}
          )
              .then(
                  (result) => res.status(200).json('Зміни внесено'),
                  (err) => next(err)
              );
        });
  });
};
