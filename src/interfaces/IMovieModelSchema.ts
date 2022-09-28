import { IBaseModelSchema } from "./IBaseModelSchema";

export interface IMovieModelSchema extends IBaseModelSchema {
  name?: string,
  description?: string,
  imageUrl?: string,

}
