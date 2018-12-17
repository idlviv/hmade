const config = require('../config');

module.exports = function(req, res, next) {
  res.cookie(
      'XSRF-TOKEN',
      req.csrfToken(),
      {
        // 'secure': false,
        'httpOnly': false,
        'maxAge': 3 * 60 * 60 * 1000,
        'sameSite': 'Strict',
        'path': '/',
      }
  );
  next();
};
