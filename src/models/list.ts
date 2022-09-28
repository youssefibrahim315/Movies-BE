import mongoose from "mongoose";
import extendSchema from "mongoose-extend-schema";
import { IListModelSchema } from "../interfaces";
import BaseSchema from "./baseModel";
const Schema = mongoose.Schema;

const List = extendSchema(
  BaseSchema,
  {
    listName: {
      type: String,
      require: true,
    },

    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
      require: true,
    },

    movies: [
      {
        movieId: {
          type: Schema.Types.ObjectId,
          ref: "movie",
          require: true,
        },
        title: {
          type: String,
        },
        description: {
          type: String,
        },
        imageUrl: { type: String },

        rank: {
          type: Number,
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model<IListModelSchema & mongoose.Document>(
  "list",
  List
);
