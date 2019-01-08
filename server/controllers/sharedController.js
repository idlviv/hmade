const config = require('../config');
const ResObj = require('../libs/responseObject');
const ApplicationError = require('../errors/applicationError');
const transporter = require('../config/mailgun');

module.exports.sendFeedbackMessage = function(req, res, next) {
  const feedback = {};
  Object.assign(feedback, req.body);

  let mailOptions = {
    from: 'HMade <questionfromsite@hmade.work>',
    to: 'info@hmade.work',
    subject: 'Питання з сайту',
    text: 'Питання ${feedback.message}. Контакти ${feedback.contacts}. Ім\'я ${feedback.name}',
    html: '<p><span style="font-weight: bold;">Питання </span>' +
    feedback.message + '</p>' +
    '<p><span style="font-weight: bold">Контакти </span>' +
    feedback.contacts + '</p>' +
    '<p><span style="font-weight: bold">Ім\'я </span>' +
    feedback.name + '</p>',
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return next(new ApplicationError(err.message, err.status));
    }
    return res.status(200).json(new ResObj(true, 'Повідомлення надіслано'));
  });
};

