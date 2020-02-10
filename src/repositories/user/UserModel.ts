import UserSchema from './UserSchema';
import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';

export const userSchema = new UserSchema({
    collection: 'Users'
});
export const userModel: mongoose.Model<IUserModel> = mongoose.model<IUserModel>('User', userSchema, 'Users', true);