import mongoose from "mongoose";
import extendSchema from "mongoose-extend-schema";
import { IUserModelSchema } from "../../interfaces";
import BaseSchema from "./baseModel";
const Schema = mongoose.Schema;

const User = extendSchema(
  BaseSchema,
  {
    userName: {
      type: String,
      require: true,
    },
    fullName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      hash: {
        type: String,
      }, salt: {
        type: String,
      }
    },
    birthDate: {
      type: Date,
      require: true,
    },
    myFavorite: [{
      type: String,
    }],
    lastRated: [{
      type: String,
    }],
  },
  { timestamps: true }
);

export default mongoose.model<IUserModelSchema & mongoose.Document>(
  "user",
  User
);
