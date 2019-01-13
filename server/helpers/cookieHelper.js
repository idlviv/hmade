const createJWT = require('../helpers/sharedHelper').createJWT;
const log = require('../config/winston')(module);

/**
 * set cookie with user credentials for frontend manipulations
 *
 * @param {*} user
 * @return {*}
 */
function setUserCookie(user) {
  return function(req, res, next) {
    return new Promise((resolve, reject) => {
      token = createJWT('', user, null, 'JWT_SECRET');
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
