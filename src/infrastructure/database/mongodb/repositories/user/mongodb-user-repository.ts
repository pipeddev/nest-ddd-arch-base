import { Inject } from "@nestjs/common";
import { UserRepositoryInterface } from "src/data/protocols/db/user/user-repository.interface";
import { User } from "src/domain/user/user";
import { UserModel } from "./user.model";
import { Model } from "mongoose";

export class MongodbUserRepository implements UserRepositoryInterface {
  constructor(
    @Inject(UserModel.name) 
    private readonly userCollection: Model<UserModel>){}

  async create(data: User): Promise<UserModel> {
    const user = new this.userCollection(data);
    return user.save()
  }

  async find(): Promise<UserModel[]> {
    return await this.userCollection.find({}, { _v: false })
  }

  async findById(id: string): Promise<UserModel> {
    return this.userCollection.findOne({ __id: { $eq: id } });
  }

  async update(id: string, dataUpdate: User): Promise<UserModel> {
    return await this.userCollection.findOneAndUpdate({
      __id: { $eq: id},
      $set: dataUpdate,
      new: true
    })
  }

  async remove(id: string): Promise<void> {
    await this.userCollection.deleteOne({ __id: { $eq: id}})
  }

}