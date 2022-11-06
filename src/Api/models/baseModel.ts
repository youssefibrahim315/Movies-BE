import mongoose from "mongoose";

const BaseSchema = new mongoose.Schema({
  createdBy: {
    type: String
  },
  updatedBy: {
    type: String,
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

export default BaseSchema;
