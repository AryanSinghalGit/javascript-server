import { VersionableSchema } from '../versionable';
class UserSchema extends VersionableSchema {
    constructor(options) {
        const userSchema = {
            id: String ,
            name: String ,
            address: String ,
            role: String ,
            email: String ,
            password: String ,
            dob: Date ,
            mob: Number,
            hobbies: [String],
        };
        super(userSchema, options);
    }
}
export default UserSchema;