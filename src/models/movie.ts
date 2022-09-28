import mongoose from "mongoose";
import extendSchema from "mongoose-extend-schema";
import { IMovieModelSchema } from "../interfaces/IMovieModelSchema";
import BaseSchema from "./baseModel";
const Schema = mongoose.Schema;

const Movie = extendSchema( 
  BaseSchema,
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model<IMovieModelSchema & mongoose.Document>("movie",Movie);
