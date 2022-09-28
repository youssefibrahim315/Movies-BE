import "reflect-metadata"; // We need this in order to use @Decorators
import express, { Application, Request, Response } from "express";
import { configuration } from "./config";
import cors from "cors";
import  routes  from "./routes";

var bodyParser = require('body-parser')

const app: Application = express();
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(routes());

export default app