const rp = require('request-promise-native');
const config = require('../config');
const log = require('../config/winston')(module);
const ApplicationError = require('../errors/applicationError');
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');
const ObjectId = require('../config/mongoose').Types.ObjectId;

const authorization = function(restrictedRole) {
  return function(req, res, next) {
    const usersRole = req.user._doc.role;

    const permissions = config.get('permissions');

    if (usersRole in permissions) {
      if (permissions[usersRole].indexOf(restrictedRole) >= 0) {
        return next();
      } else {
        return next(new ApplicationError('notAuthorized', 401));
      }
    } else {
      return next(new ApplicationError('notAuthorized', 401));
    }
  };
};

const authentication = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return next(new ApplicationError('notAuthenticated', 401));
  }
};

module.exports = {
  authorization,
  authentication,
}

// function headersExtractor(req) {
//   let token = null;
//   if (req && req.headers && req.headers.authorization) {
//     token = req.headers.authorization;
//   }
//   return token;
// };

// // !not guard. Only extracts userId from headers and adds it to req.user_id
// module.exports.notGuardExtarctUser_id = function() {
//   return function(req, res, next) {
//     const jwtFromRequest = headersExtractor(req);

//     if (jwtFromRequest) {
//       jwt.verify(jwtFromRequest.substr(4), config.get('JWT_SECRET'),
//           (err, payload) => {
//             if (err) {
//               req.user_id = '';
//               next();
//             }
//             req.user_id = new ObjectId(payload.sub._id);
//             next();
//           });
//     } else {
//       req.user_id = '';
//       next();
//     }
//   };
// };
