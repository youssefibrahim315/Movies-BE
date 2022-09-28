import { configuration } from "../config";
const mongoose = require("mongoose");

export default async () => {
  try {
    const URL = configuration.dataBase.URL;
    const connectionParams = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    await mongoose.connect(URL, connectionParams).then(() => {
        console.log("Connected to database ");
      })
      .catch((err: any) => {
        console.error(`Error connecting to the database. \n${err}`);
      });
  } catch (error) {
    console.error(`Error connecting to the database. \n${error}`);
  }
};
