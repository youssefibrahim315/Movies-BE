import { IBaseModelSchema } from "./IBaseModelSchema";

export interface IMovieModelSchema extends IBaseModelSchema {
  name?: string,
  description?: string,
  imageUrl?: string,
  rate?:{userId:string,vote:number}
  categoriesIds?:[],
}
