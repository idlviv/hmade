const rp = require('request-promise-native');
const config = require('../config');
const log = require('../config/winston')(module);
const ApplicationError = require('../errors/applicationError');
const ExtractJwt = require('passport-jwt').ExtractJwt;

module.exports.authorization = function(restrictedRole) {
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

function headersExtractor (req) {
  let token = null;
  if (req && req.headers && req.headers.authorization) {
    token = req.headers.authorization;
  }
  return token;
};

module.exports.notGuardExtarctUser = function() {
  return function(req, res, next) {

    const jwtFromRequest = headersExtractor(req);
    log.debug('jwtFromRequest', jwtFromRequest);
    //  ExtractJwt.fromAuthHeaderWithScheme('jwt');
    
    if (jwtFromRequest) {
      
    } else {
      req.userRole = 'role';
    }

    next();
    // const usersRole = req.user._doc.role;

    // const permissions = config.get('permissions');

    // if (usersRole in permissions) {
    //   if (permissions[usersRole].indexOf(restrictedRole) >= 0) {
    //     return next();
    //   } else {
    //     return next(new ApplicationError('notAuthorized', 401));
    //   }
    // } else {
    //   return next(new ApplicationError('notAuthorized', 401));
    // }
  };
};
