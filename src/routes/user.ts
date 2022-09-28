import { NextFunction, Response, Request, Router } from "express";
import Container from "typedi";
import { IUserModelSchema } from "../interfaces";
import { IMovieList } from "../interfaces/IMovieList";
import user from "../services/user";
const route = Router();
Container.set("user", user);
const userService = Container.get(user);

export default (app: Router) => {
  app.use("/user", route);
  route.get("/", async (req: Request, res: Response, next: NextFunction) => {
    const getMovie:IUserModelSchema[] = await userService.getUser();
    res.status(200).send(getMovie);
  });
  route.get("/movieList/:userId", async (req: Request, res: Response, next: NextFunction) => {
    const getMovie:IMovieList[] = await userService.getmoviesList(req.params.userId);
    res.status(200).send(getMovie);
  });
  route.get("/:userId", async (req: Request, res: Response, next: NextFunction) => {
    const getMovie:IUserModelSchema = await userService.getUserById(req.params.userId);
    res.status(200).send(getMovie);
  });
  route.post("/", async (req: Request, res: Response, next: NextFunction) => {
    const movie:IUserModelSchema = req.body
    const MovieDetails:IUserModelSchema = await userService.createUser(req.params.movieId,movie);
    res.status(200).send(MovieDetails);
  });
  route.patch("/:userId", async (req: Request, res: Response, next: NextFunction) => {
    const movie:IUserModelSchema = req.body
    const MovieDetails:IUserModelSchema = await userService.patchUser(req.params.userId,movie);
    res.status(200).send(MovieDetails);
  });
  route.patch("/movieList/:userId", async (req: Request, res: Response, next: NextFunction) => {
    const movie:IUserModelSchema = req.body
    const MovieDetails:IUserModelSchema = await userService.updateList(req.params.userId,movie);
    res.status(200).send(MovieDetails);
  });
  route.delete("/:userId", async (req: Request, res: Response, next: NextFunction) => {
    const MovieDetails:IUserModelSchema = await userService.deleteUser(req.params.userId);
    res.status(200).send(MovieDetails);
  });
};
