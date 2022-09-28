import { Service } from "typedi";
import { IMovieModelSchema } from "../interfaces/IMovieModelSchema";
import movieModel from "../models/movie";

@Service()
export default class movieService {
  public async getMovie(): Promise<IMovieModelSchema[]> {
    const movie:IMovieModelSchema[] = await movieModel.find({ isDeleted: false }).sort({createdAt:-1});
    return movie;
  }
  public async createMovie(MovieDetails: IMovieModelSchema): Promise<IMovieModelSchema> {
    const movie = await movieModel.create({
      name: MovieDetails.name,
      description: MovieDetails.description,
      imageUrl: MovieDetails.imageUrl
    });
    return movie;
  }
  public async deleteMovie(movieId: string): Promise<IMovieModelSchema> {
    const movie:IMovieModelSchema = await movieModel.findByIdAndUpdate({ _id: movieId },{ $set: { isDeleted: true } });
    return movie;
  }
  public async patchMovie(id:string,MovieDetails: IMovieModelSchema): Promise<IMovieModelSchema> {
    console.log("patchMovie");
    const movie:IMovieModelSchema = await movieModel.findOneAndUpdate(
      { _id: id},
      {
        $set: {
          name: MovieDetails.name,
          description: MovieDetails.description,
          imageUrl: MovieDetails.imageUrl,
        },
      }
    );
    return movie;
  }
}
