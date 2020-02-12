import * as mongoose from 'mongoose';
export default class VersionableSchema extends mongoose.Schema {
    constructor(userSchema, options) {
        const versionSchema = {
            originalId: String,
            createdAt: {type: Date, default: Date.now()} ,
            UpdatedAt: Date,
            createdBy: String,
            UpdatedBy: String,
            DeletedBy: String,
        };
    super({ ...userSchema, ...versionSchema}, options);
    }
}