import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './users.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(name: string, email: string, password: string) {
    const createdUser = new this.userModel({
      name,
      email,
      password,
    });
    return createdUser.save();
  }

  async findOne(email: string) {
    return this.userModel.findOne({ email }).exec();
  }
}
