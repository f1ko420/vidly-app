import React, { useEffect, useState } from "react";
import TableBody from "../common/TableBody";
import TableHeader from "../common/TableHeader";
import { getMovies } from "../services/movieService";

export interface Movie {
  dailyRentalRate: number;
  genre: { _id: string; name: string };
  id: string;
  liked: boolean;
  numberInStock: number;
  title: string;
}

const MoviesTable: React.FC = () => {
  const [movies, setMovies] = useState<Array<Movie>>([]);
  const [liked, setLiked] = useState<boolean>(false);
  useEffect(() => {
    const moviesRequest = async () => {
      const { data }: any = await getMovies();
      setMovies(data);
    };
    moviesRequest();
  }, []);
  const handleLike = (movie: Movie) => {
    const moviesCopy = [...movies];
    const index = movies.indexOf(movie);
    moviesCopy[index].liked
      ? (moviesCopy[index].liked = false)
      : (moviesCopy[index].liked = true);
    setMovies(moviesCopy);
  };
  return (
    <table className="table">
      <TableHeader />
      <TableBody liked={liked} data={movies} onLike={handleLike} />
    </table>
  );
};

export default MoviesTable;
