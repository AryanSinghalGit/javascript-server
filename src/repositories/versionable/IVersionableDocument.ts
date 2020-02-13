import * as mongoose from 'mongoose';
export default interface IVersionableDocument extends mongoose.Document {
    originalId: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    createdBy: string;
    updatedBy: string;
    deletedBy: string;
}