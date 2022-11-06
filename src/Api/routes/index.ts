import { Router } from "express";
import movies from "./movies";
import user from "./user";
import category from "./category";
const app: Router = Router();

export default () => {
  movies(app);
  user(app);
  category(app);
  // routeNotFound(app);
  return app;
};
