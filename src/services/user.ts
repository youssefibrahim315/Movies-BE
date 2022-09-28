import { Service } from "typedi";
import { IUserModelSchema } from "../interfaces";
import { IMovieList } from "../interfaces/IMovieList";
import userModel from "../models/user";

@Service()
export default class userService {
  public async getUser(): Promise<IUserModelSchema[]> {
    const user: IUserModelSchema[] = await userModel.find({ isDeleted: false }).sort({ createdAt: -1 });
    return user;
  }
  public async getUserById(userId: string): Promise<IUserModelSchema> {
    const user: IUserModelSchema = await userModel.findOne({ _id: userId, isDeleted: false }).sort({ createdAt: -1 });
    return user;
  }
  public async getmoviesList(userId: string): Promise<IMovieList[]> {
    const user: IUserModelSchema = await this.getUserById(userId);
    const movieList: IMovieList[] = user.movies
    return movieList;
  }
  public async createUser(movieId: string,
    user: IUserModelSchema
  ): Promise<IUserModelSchema> {
    const userDetails: IUserModelSchema = await userModel.create({
      userName: user.userName,
      email: user.email,
      password: user.password,
      movies: user.movies,
    });
    return userDetails;
  }
  public async deleteUser(userId: string): Promise<IUserModelSchema> {
    const user: IUserModelSchema = await userModel.findByIdAndUpdate({ _id: userId },{ $set: { isDeleted: true } });
    return user;
  }
  public async patchUser(userId: string,user: IUserModelSchema): Promise<IUserModelSchema> {
    const userDetais: IUserModelSchema = await userModel.findByIdAndUpdate({ _id: userId },{ $set: { userName: user.userName } });
    return userDetais;
  }
  public async updateList(userId: string, user: IUserModelSchema): Promise<IUserModelSchema> {
    const userDetais: IUserModelSchema = await userModel.findByIdAndUpdate({ _id: userId },{ $set: { movies: user.movies } });
    return userDetais;
  }
}
