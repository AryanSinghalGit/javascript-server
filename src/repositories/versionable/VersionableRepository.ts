import * as mongoose from 'mongoose';
import { IVersionableDocument, VersionableRepository } from '.';

export default class VersionRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {
  protected versionModel: M;
  constructor(versionModel) {
    this.versionModel = versionModel;
  }

  public static generateObjectId = () => {
    return String(mongoose.Types.ObjectId());
  }

  public create(creatorId, data) {
    const id = VersionableRepository.generateObjectId();
    return this.versionModel.create({
      ...data,
      _id: id,
      originalId: id,
      createdBy: creatorId,
      createdAt: Date.now(),
    });
  }

  async delete(userId, id) {
    const oldData: any = await this.versionModel.findOne({ originalId: id, deletedAt: undefined });
    return this.versionModel.findByIdAndUpdate(oldData._id,
      {
        deletedAt: Date.now(),
        deletedBy: userId
      }
    );
  }

  async update(userId, id, updatedData) {
    const oldData: any = await this.versionModel.findOne({ originalId: id, deletedAt: undefined });
    const { name, address, email, dob, mob, hobbies, role, password } = oldData;
    if (updatedData.email !== undefined)
      updatedData.email = updatedData.email.toLowerCase();
    const bool = await this.versionModel.findOne({ email: updatedData.email, deletedAt: undefined });
    if (updatedData.email !== email && updatedData.email !== undefined && bool !== null) {
      return false;
    }
    this.versionModel.create({
      name, address, email, dob, mob, hobbies, role,
      ...updatedData,
      password,
      originalId: id,
      updatedAt: Date.now(),
      updatedBy: userId,
    });
    return this.versionModel.findByIdAndUpdate(oldData._id,
      {
        deletedAt: Date.now(),
        deletedBy: userId,
      }
    );
  }

  public list(query, projection, options) {
    const { searchBy, sort } = query;
    const { userRole, skip: skipRecord, limit: limitRecord } = options;
    return this.versionModel.find({ deletedAt: undefined, role: userRole, ...searchBy }, projection).sort(sort).skip(Number(skipRecord)).limit(Number(limitRecord));
  }
}
