import React, { useEffect, useState } from "react";
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
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const moviesRequest = async () => {
      const { data }: any = await getMovies();
      setMovies(data);
    };
    moviesRequest();
  }, []);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Genre</th>
          <th scope="col">Rate</th>
          <th scope="col">Stock</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((m: Movie) => {
          return (
            <tr>
              <th scope="row">{m.title}</th>
              <td>{m.genre.name}</td>
              <td>{m.dailyRentalRate}</td>
              <td>{m.numberInStock}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MoviesTable;
