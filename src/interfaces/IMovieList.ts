import { IBaseModelSchema } from "./IBaseModelSchema"
import { IListModelSchema } from "./IListModelSchema"

export interface IMovieList {
  name?: string,
  description?: string,
  imageUrl?: string,
  rate?:{
    userId:{
      type:string,
    },
    vote:{
      type:number,
    }
  },
  categoriesIds?:[string],
}