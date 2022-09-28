import { IBaseModelSchema } from "./IBaseModelSchema"
import { IListModelSchema } from "./IListModelSchema"

export interface IMovieList {
  movieId?:string,
  name?: string,
  description?: string,
  imageUrl?: string,
  rank?:number,
  }