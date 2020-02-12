import * as mongoose from 'mongoose';
export default interface IVersionableDocument extends mongoose.Document {
    originalId: string;
    createdAt: Date;
    UpdatedAt: Date;
    createdBy: string;
    UpdatedBy: string;
    DeletedBy: string;
}