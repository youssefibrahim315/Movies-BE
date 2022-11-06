import { IBaseModelSchema } from "./IBaseModelSchema";
import { IMovieList } from "./IMovieList";

export interface IUserModelSchema extends IBaseModelSchema {
  fullName?: string;
  userName?: string;
  email?: string;
  birthDate?: Date;
  password?: string;
  myFavorite?: [string];
  lastRated: [string];
}
