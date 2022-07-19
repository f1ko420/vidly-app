import { Movie } from "../components/MoviesTable";
import axios from "./axios";

export const getMovies = () => {
  return axios.get<Array<Movie>>("/movies");
};
