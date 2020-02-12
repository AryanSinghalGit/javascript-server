import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';
import { userModel } from './UserModel';
import { VersionableRepository } from '../versionable';
class UserRepository extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {
    constructor() {
        super(userModel);
    }
    count = () => {
        return this.versionModel.countDocuments();
    }
    list = () => {
       return this.versionModel.find({}).exec();
    }
    findOne = (id) => {
        return this.versionModel.findOne({_id: id}).exec();
    }
}
export default new UserRepository();