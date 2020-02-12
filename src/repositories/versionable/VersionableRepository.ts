import * as mongoose from 'mongoose';
import { IVersionableDocument, VersionableRepository } from '.';
export default class VersionRepository< D extends mongoose.Document, M extends mongoose.Model<D> > {
    protected versionModel: M ;
    constructor(versionModel) {
        this.versionModel = versionModel;
    }
    public static generateObjectId = () => {
        return String(mongoose.Types.ObjectId());
    }
    create = (data) => {
        const id = VersionableRepository.generateObjectId();
        return this.versionModel.create({
            ...data,
            _id: id,
            originalId: id
        });
    }
    delete = (id) => {
        console.log(id);
       return this.versionModel.findOneAndUpdate({_id: id}, { $set: { deletedAt: Date.now()}});
    }
    update = (id, updatedData) => {
        this.versionModel.update({actualId: id, deletedAt: undefined }, { $set: { deletedAt: Date.now() } } );
        return this.versionModel.create({
            ...updatedData,
            originalId: id
        });
     }
}