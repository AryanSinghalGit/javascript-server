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
    delete = (req, id) => {
        console.log(id);
        return super.delete(req, id);
    }
    update = (req, id, updatedData) => {
       return super.update(req, id, updatedData);
     }
    count = () => {
        return this.versionModel.countDocuments();
    }
    list = () => {
       return super.list();
    }
    findOne = (id) => {
        return this.versionModel.findOne({_id: id}).exec();
    }
    findByEmail = (emailId) => {
        return this.versionModel.findOne({email: emailId});
    }
}
export default new UserRepository();