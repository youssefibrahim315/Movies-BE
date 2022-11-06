import "reflect-metadata"; // We need this in order to use @Decorators
import express, { Application} from "express";
import cors from "cors";
import  routes  from "./Api/routes";
import { errors } from "celebrate";

var bodyParser = require('body-parser')

const app: Application = express();
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(routes());

app.use(errors());
app.use(()=>{throw new Error("un Know Error")});

export default app