import { Router } from "express";
import movies from "./movies";
import list from "./list";
import user from "./user";
const app: Router = Router();

export default () => {
  movies(app);
  user(app);
  list(app);
  // routeNotFound(app);
  return app;
};
