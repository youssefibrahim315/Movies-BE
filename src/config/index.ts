import * as dotenv from 'dotenv' 
dotenv.config()
import express from 'express'
export const configuration = {
  server: {
    PORT: process.env.PORT || 3000,
  },
  dataBase: {
    URL: process.env.URL,
  },
  middleware: {},
  services: {},
};
