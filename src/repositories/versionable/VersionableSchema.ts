import * as mongoose from 'mongoose';
export default class VersionableSchema extends mongoose.Schema {
    constructor(userSchema, options) {
        const versionSchema = {
            originalId: String,
            createdAt: Date,
            updatedAt: { type: Date, default: Date.now() },
            deletedAt: Date,
            createdBy: String,
            updatedBy: String,
            deletedBy: String,
        };
    super({ ...userSchema, ...versionSchema}, options);
    }
}