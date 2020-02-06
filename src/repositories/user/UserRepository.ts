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
    delete = (data) => {
       // return this.userModel.create(data);
    }
    update = (data) => {
       // return this.userModel.create(data);
    }
    list = (data) => {
       // return this.userModel.create(data);
    }
}
export default new UserRepository();