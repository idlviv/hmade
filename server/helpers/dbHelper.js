const config = require('../config');
const ClientError = require('../errors/clientError');
const ApplicationError = require('../errors/applicationError');
const DBError = require('../errors/dbError');
// const UserModel = require('../models/userModel');
// const ChatActiveUserModel = require('../models/chatActiveUserModel');
const log = require('../config/winston')(module);
const mongoose = require('mongoose');

class DBHelper {
  constructor() { }

  static chooseModel(model) {
    switch (model) {
      case 'UserModel':
        // const { UserModel } = require('user-man').UserModel;
        return mongoose.models.users;
    }
    switch (model) {
      case 'ChatActiveUserModel':
        return mongoose.models.chatActiveUsers;
    }
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

  async updateOne(model, query, modificationRequest, upsert) {
    return new Promise((resolve, reject) => {
      DBHelper.chooseModel(model).updateOne(query,
          { $set: modificationRequest }, { upsert })
          .then(
              (result) => {
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
