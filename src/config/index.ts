import * as dotenv from 'dotenv' 
dotenv.config()
import express from 'express'
export const configuration = {
  server: {
    PORT: process.env.PORT,
  },
  dataBase: {
    URL: process.env.URL,
  },
  middleware: {
    jwtPublicKey:process.env.SECRET, //JWT
    jwtAlgorithm:process.env.ALGORITHM,  //JWT
    jwtPrivateKey:process.env.PRIVATEKEY,  //JWT

  },
  services: {},
};
