import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';
import { userModel } from './UserModel';
import { VersionableRepository } from '../versionable';

class UserRepository extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {
  constructor() {
    super(userModel);
  }

  create = (creatorId, data) => {
    return super.create(creatorId, data);
  }

  delete = (userId, id) => {
    console.log(id);
    return super.delete(userId, id);
  }

  update = (userId, id, updatedData) => {
    return super.update(userId, id, updatedData);
  }

  count = (query = {}) => {
    return this.versionModel.countDocuments({ ...query, deletedAt: { $exists: false } });
  }

  list = (query, projection, options) => {
    return super.list(query, projection, options);
  }

  findOne = (item) => {
    return this.versionModel.findOne({ ...item, deletedAt: undefined });
  }

}

export default new UserRepository();
