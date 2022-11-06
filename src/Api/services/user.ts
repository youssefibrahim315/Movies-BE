import { Service } from "typedi";
import { IUserModelSchema } from "../../interfaces";
import { IMovieList } from "../../interfaces/IMovieList";
import generateToken from "../../utils/generateAuthToken";
import userModel from "../models/user";
import argon2 from "argon2";
import { hashPassword, validatePassword } from "../../utils/validatePassword";

@Service()
export default class userService {

  public async authorization(user: IUserModelSchema): Promise<any> {
    const isExist: IUserModelSchema = await this.login(user);    
    if (!isExist) {
      throw new Error("Invalid user");
    }
    const token = await generateToken(isExist, 3, "hour");
    return {
      token,
    };
  }
  public async login(user: IUserModelSchema): Promise<IUserModelSchema> {
    const User:any = await this.getUserByEmail(user.email);    
    const isPasswordValidated = await validatePassword(User.password.hash, user.password);
    if (!isPasswordValidated) {
      throw new Error("Invalid Email or password");
    }
    return User
  }

  public async getAllUsers(filterationFeilds?): Promise<IUserModelSchema[]> {
    let filters: any = {
      isDeleted: false,
    };
    if (filterationFeilds) {
     await Object.keys(filterationFeilds).forEach((key) => {
      filters[key] = filterationFeilds[key]
      })
    }

    const user: IUserModelSchema[] = await userModel.find(filters).sort({ createdAt: -1 });
    return user;
  }
  public async getUserById(userId: string): Promise<IUserModelSchema> {
    const user: IUserModelSchema = await userModel.findOne({ _id: userId, isDeleted: false }).sort({ createdAt: -1 }).lean();
    return user;
  }
  public async getUserByEmail(userEmail: string): Promise<any> {
    const user: IUserModelSchema = await userModel.findOne({ email: userEmail, isDeleted: false }).sort({ createdAt: -1 }).lean();
    // if (!user) throw Error("invalid User");
    return user;
  }
  public async getUserFavoriteList(userId: string): Promise<string[]> {
    const user: IUserModelSchema = await this.getUserById(userId);
    const moviesIds: string[] = user.myFavorite
    return moviesIds;
  }
  public async createUser(user: IUserModelSchema
  ): Promise<IUserModelSchema> {
    const User: IUserModelSchema = await this.getUserByEmail(user.email);    
    if (User) {
      throw new Error("user is exist");
    }
    user.password = await hashPassword(user.password)
    const userDetails: IUserModelSchema = await userModel.create({
      fullName:user.fullName,
      userName: user.userName,
      email: user.email,
      password: user.password,
      myFavorite: user.myFavorite,
      lastRated: user.lastRated
    });
    return userDetails;
  }
  public async deleteUser(userId: string): Promise<IUserModelSchema> {
    const user: IUserModelSchema = await userModel.findByIdAndUpdate({ _id: userId }, { $set: { isDeleted: true } });
    return user;
  }
  public async patchUser(userId: string, user: IUserModelSchema): Promise<IUserModelSchema> {
    const userDetais: IUserModelSchema = await userModel.findByIdAndUpdate({ _id: userId }, { $set: { userName: user.userName } });
    return userDetais;
  }

}
