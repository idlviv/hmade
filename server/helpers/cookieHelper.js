const cryptHelper = require('user-man').cryptHelper;
const config = require('../config');

/**
 * set cookie with user credentials for frontend manipulations
 *
 * @param {*} user
 * @return {*}
 */
function setUserCookie(user) {
  return function(req, res, next) {
    return new Promise((resolve, reject) => {
      token = cryptHelper.createJWT('', user, null, config.get('JWT_SECRET'));
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
      resolve();
    });
  };
}
module.exports = {
  setUserCookie,
};
