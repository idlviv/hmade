const createJWT = require('../helpers/sharedHelper').createJWT;
const log = require('../config/winston')(module);

/**
 * set cookie with user credentials for frontend manipulations
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function setUserCookie(req, res, next) {
  let token;
  if (req.isAuthenticated()) {
    const user = {
      _id: req.user._doc._id,
      login: req.user._doc.login,
      name: req.user._doc.name,
      surname: req.user._doc.surname,
      avatar: req.user._doc.avatar,
      provider: req.user._doc.provider,
      role: req.user._doc.role,
      commentsReadedTill: req.user._doc.commentsReadedTill,
    };
    token = createJWT('', user, null, 'JWT_SECRET');
  } else {
    token = createJWT('', null, null, 'JWT_SECRET');
  }
  res.cookie(
      'hmade',
      token,
      {
        // 'secure': false,
        httpOnly: false,
        // 'maxAge': null,
        sameSite: 'Strict',
      }
  );
  next();
}

module.exports = {
  setUserCookie,
};
