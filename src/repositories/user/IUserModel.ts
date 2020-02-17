import { IVersionableDocument } from '../versionable';
export default interface IUserModel extends IVersionableDocument {
    id: string ;
    name: string ;
    address: string ;
    email: string ;
    role: string ;
    password: string;
    dob: Date ;
    mob: number;
    hobbies: string[] ;
}