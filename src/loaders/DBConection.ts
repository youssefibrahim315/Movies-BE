import { configuration } from "../config";
const mongoose = require("mongoose");

export default async () => {
  const url = configuration.dataBase.url;
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
 await  mongoose.connect(url, connectionParams).then(() => {
    console.log("Connected to database ");
    }).catch((err: any) => {
    console.error(`Error connecting to the database. \n${err}`);
    });
    // return  
};