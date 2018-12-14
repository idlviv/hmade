const config = require('../config');

module.exports = function(req, res, next) {
  res.cookie(
      'XSRF-TOKEN',
      req.csrfToken(),
      {
        // 'secure': false,
        'httpOnly': false,
        'maxAge': 500000,
        'sameSite': 'Strict',
        'path': '/',
      }
  );
  next();
};
