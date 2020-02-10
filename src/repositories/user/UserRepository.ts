import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';
import { userModel } from './UserModel';
class UserRepository {
    private userModel: mongoose.Model<IUserModel>;
    constructor() {
        this.userModel = userModel;
    }
    create = (data) => {
        return this.userModel.create(data);
    }
    count = () => {
        return this.userModel.countDocuments();
    }
    delete = (id) => {
        console.log(id);
       return this.userModel.findOneAndDelete({_id: id});
    }
    update = (id, updatedData) => {
       return this.userModel.findOneAndUpdate({_id: id}, updatedData);
    }
    list = () => {
       return this.userModel.find({}).exec();
    }
    findOne = (id) => {
        return this.userModel.findOne({_id: id}).exec();
    }
}
export default new UserRepository();