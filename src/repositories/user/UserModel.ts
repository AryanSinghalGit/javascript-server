import UserSchema from './UserSchema';
import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';
const toConvert = {
    transfers: (docs: any, ret: any) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret._v;
    }
};
export const userSchema = new UserSchema({
    collection: 'Users',
    toJSON: toConvert,
    toObject: toConvert,
});
export const userModel: mongoose.Model<IUserModel> = mongoose.model<IUserModel>('User', userSchema, 'Users', true);