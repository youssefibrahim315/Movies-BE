import { celebrate, Joi, Segments } from "celebrate";
import { NextFunction, Response, Request, Router } from "express";
import Container from "typedi";
import { IMovieModelSchema } from "../../interfaces";
import { IMovieList } from "../../interfaces/IMovieList";
import filterQueryResult from "../middlewares/filterQuery";
import isAuth from "../middlewares/isAuth";
import movie from "../services/movie";
import CreateMovieValidations from "../validations/movie/CreateMovie.validations";
import DeleteMovieValidations from "../validations/movie/DeleteMovie.validations";
import ListMovieValidations from "../validations/movie/ListMovie.validations";
import UpdateMovieValidations from "../validations/movie/UpdateMovie.validations";
const route = Router();
const movieService = Container.get(movie);

export default (app: Router) => {
  app.use("/movies", route);
  route.get("/", isAuth, ListMovieValidations, filterQueryResult, async (req: Request, res: Response, next: NextFunction) => {
    const filterationFeilds = req["filterQueryParams"];

    const getMovie: IMovieModelSchema[] = await movieService.getMovie(filterationFeilds);
    res.status(200).send(getMovie);
  });
  route.post("/", isAuth, CreateMovieValidations, async (req: Request, res: Response, next: NextFunction) => {
    const movie: IMovieModelSchema = req.body
    const MovieDetails: IMovieModelSchema = await movieService.createMovie(movie);
    res.status(200).send(MovieDetails);
  });
  route.patch("/:id", isAuth, UpdateMovieValidations, async (req: Request, res: Response, next: NextFunction) => {
    const movie: IMovieModelSchema = req.body
    const MovieDetails: IMovieModelSchema = await movieService.patchMovie(req.params.id, movie);
    res.status(200).send(MovieDetails);
  });
  route.delete("/:id", isAuth, DeleteMovieValidations, async (req: Request, res: Response, next: NextFunction) => {
    const MovieDetails: IMovieModelSchema = await movieService.deleteMovie(req.params.id);
    res.status(200).send(MovieDetails);
  });

};

