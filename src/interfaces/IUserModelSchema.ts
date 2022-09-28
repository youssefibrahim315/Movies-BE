import { IBaseModelSchema } from "./IBaseModelSchema";
import { IMovieList } from "./IMovieList";

export interface IUserModelSchema extends IBaseModelSchema {
  userName?: string;
  email?: string;
  password?: string;
  movies?: [IMovieList];
}
