import mongoose from "mongoose";
import extendSchema from "mongoose-extend-schema";
import { IUserModelSchema } from "../interfaces";
import BaseSchema from "./baseModel";
const Schema = mongoose.Schema;

const User = extendSchema(
  BaseSchema,
  {
    userName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    movies: [
      {
        movieId: {
          type: Schema.Types.ObjectId,
          ref: "movie",
        },

        title: {
          type: String,
        },
        description: {
          type: String,
        },
        imageUrl: {
          type: String,
        },
        rank: {
          type: Number,
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model<IUserModelSchema & mongoose.Document>(
  "user",
  User
);
