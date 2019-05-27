const config = require('../config');
const ClientError = require('../errors/clientError');
const ApplicationError = require('../errors/applicationError');
const DBError = require('../errors/dbError');
const UserModel = require('../models/userModel');
const ChatActiveUserModel = require('../models/chatActiveUserModel');
const log = require('../config/winston')(module);

class DBHelper {
  constructor() { }

  static chooseModel(model) {
    let choise;
    switch (model) {
      case 'UserModel':
        choise = require('../models/userModel');
        break;
    }
    switch (model) {
      case 'ChatActiveUserModel':
        choise = require('../models/chatActiveUserModel');
        break;
    }
    return choise;
  }

  async findById(model, _id) {
    return new Promise((resolve, reject) => {
      DBHelper.chooseModel(model).findById({_id: _id})
          .then(
              (result) => resolve(result),
              (err) => reject(new DBError(err.message, err.code))
          );
    });
  }

  async upsert(model, query, modificationRequest) {
    return new Promise((resolve, reject) => {
      log.debug('modificationRequest %o', modificationRequest);
      DBHelper.chooseModel(model).update(query,
          { $set: modificationRequest }, { upsert: true })
          .then(
              (result) => {
                log.debug('ok');
                if (result.ok !== 1) {
                  reject(new ApplicationError('Не вдалося внести зміни', 400));
                }
                resolve('ok');
              },
              (err) => reject(new DbError(err.message, err.code))
          );
    });
  }
}

module.exports = DBHelper;
