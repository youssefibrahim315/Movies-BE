import { NextFunction, Response, Request, Router } from "express";
import Container from "typedi";
import { IMovieModelSchema } from "../interfaces";
import movie from "../services/movie";
const route = Router();
Container.set("movie", movie);
const movieService = Container.get(movie);

export default (app: Router) => {
  app.use("/movies", route);
  route.get("/", async (req: Request, res: Response, next: NextFunction) => {
    const getMovie:IMovieModelSchema[] = await movieService.getMovie();
    res.status(200).send(getMovie);
  });
  route.post("/", async (req: Request, res: Response, next: NextFunction) => {
    const movie:IMovieModelSchema = req.body
    const MovieDetails:IMovieModelSchema = await movieService.createMovie(movie);
    res.status(200).send(MovieDetails);
  });
  route.patch("/:id", async (req: Request, res: Response, next: NextFunction) => {
    const movie:IMovieModelSchema = req.body
    const MovieDetails:IMovieModelSchema = await movieService.patchMovie(req.params.id,movie);
    res.status(200).send(MovieDetails);
  });
  route.delete("/:id", async (req: Request, res: Response, next: NextFunction) => {
    const MovieDetails:IMovieModelSchema = await movieService.deleteMovie(req.params.id);
    res.status(200).send(MovieDetails);
  });
};
