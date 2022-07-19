import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Movie } from "../components/MoviesTable";

interface LikedProps {
  data: Movie;
  liked: boolean;
  onLike: (data: Movie) => void;
}

const Liked: React.FC<LikedProps> = ({ data, onLike, liked }) => {
  return (
    <div onClick={() => onLike(data)}>
      {data.liked ? (
        <i className="fa fa-heart" aria-hidden="true"></i>
      ) : (
        <i className="fa-regular fa-heart"></i>
      )}
    </div>
  );
};

export default Liked;
