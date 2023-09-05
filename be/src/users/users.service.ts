import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './users.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(
    name: string,
    email: string,
    password: string,
    verificationCode: string,
  ) {
    const createdUser = new this.userModel({
      name,
      email,
      password,
      emailVerificationCode: verificationCode,
      emailVerified: false,
    });
    return createdUser.save();
  }

  async findOneByEmail(email: string) {
    return this.userModel.findOne({ email }).exec();
  }

  async findOneById(id: string) {
    return this.userModel.findById(id).exec();
  }
}
