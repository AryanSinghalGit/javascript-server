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
    countTrainee = () => {
        return this.versionModel.countDocuments({role: 'trainee', deletedAt: {$exists: false}});
    }
    list = (userRole, skip, limit, sort, searchBy) => {
       return super.list(userRole, skip, limit, sort, searchBy);
    }
    findOne = (id) => {
        return this.versionModel.findOne({originalId: id}).exec();
    }
    findByEmail = (emailId) => {
        return this.versionModel.findOne({email: emailId, deletedAt: undefined});
    }
    // createIndexes = (searchBy: string, search: string): IUserModel => {
    //     return this.versionModel.createIndexes({ name : 'text', email: 'text' );
    // }
}
export default new UserRepository();
