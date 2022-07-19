import React from "react";
import MoviesTable, { Movie } from "../components/MoviesTable";
import Liked from "./Liked";

interface TableBodyProps {
  data: Array<Movie>;
  liked: boolean;
  onLike: (data: Movie) => void;
}

const TableBody: React.FC<TableBodyProps> = ({ data, liked, onLike }) => {
  return (
    <tbody>
      {data.map((data) => {
        return (
          <tr key={data.id}>
            <th scope="row">{data.title}</th>
            <td>{data.genre.name}</td>
            <td>{data.dailyRentalRate}</td>
            <td>{data.numberInStock}</td>
            <td>
              <Liked liked={liked} data={data} onLike={onLike} />
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
