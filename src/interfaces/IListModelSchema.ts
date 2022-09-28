import { IBaseModelSchema } from "./IBaseModelSchema";
import { IMovieList } from "./IMovieList";

export interface IListModelSchema extends IBaseModelSchema {
  listName?: string;
  userId?: string;
  movies?: [IMovieList];
}
