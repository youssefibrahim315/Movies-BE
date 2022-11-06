import { Service } from "typedi";
import { IMovieModelSchema } from "../../interfaces/IMovieModelSchema";
import movieModel from "../models/movie";

@Service()
export default class movieService {
  public async getMovie(filterationFeilds?): Promise<IMovieModelSchema[]> {
    let filters: any = {isDeleted: false}
      if (filterationFeilds) {
      console.log(filterationFeilds);

      await Object.keys(filterationFeilds).forEach((key) => {
          console.log(key,filterationFeilds[key]);
          filters[`${key}.vote`] = filterationFeilds[key]
      })
    }
    console.log(filters);

    const movie: IMovieModelSchema[] = await movieModel.find(filters).sort({ createdAt: -1 });
    return movie;
  }
  public async createMovie(MovieDetails: IMovieModelSchema): Promise<IMovieModelSchema> {
    console.log(MovieDetails);
    const movie: IMovieModelSchema = await movieModel.create({
      name: MovieDetails.name,
      description: MovieDetails.description,
      imageUrl: MovieDetails.imageUrl,
      rate: MovieDetails.rate,
      categoriesIds: MovieDetails.categoriesIds,
    });
    return movie;
  }
  public async deleteMovie(movieId: string): Promise<IMovieModelSchema> {
    const movie: IMovieModelSchema = await movieModel.findByIdAndUpdate({ _id: movieId }, { $set: { isDeleted: true } });
    return movie;
  }
  public async patchMovie(id: string, MovieDetails: IMovieModelSchema): Promise<IMovieModelSchema> {
    const movie: IMovieModelSchema = await movieModel.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          name: MovieDetails.name,
          description: MovieDetails.description,
          imageUrl: MovieDetails.imageUrl,
          rate:MovieDetails.rate,
          categoriesIds:MovieDetails.categoriesIds,
        },
      }
    );
    return movie;
  }



}
