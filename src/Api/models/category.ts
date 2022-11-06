import mongoose from "mongoose";
import extendSchema from "mongoose-extend-schema";
import { ICategory } from "../../interfaces/ICategory";
import BaseSchema from "./baseModel";
const Schema = mongoose.Schema;

const category = extendSchema(
  BaseSchema,
  {
    title: {
      type: String,
      require: true,
      unique:true
    },
  },
  { timestamps: true }
);

export default mongoose.model<ICategory & mongoose.Document>("category",category);
