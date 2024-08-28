import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleMovie = ({ movie}) => {
  return (
    <Link to={'/movieDetails/' + movie.imdbID} style={{ textDecoration: 'none' }}>
      <Card className="h-100 movieCard" key= {movie.imdbID}>
        <Card.Img
          variant="top"
          className="h-100"
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"}
          alt={movie.Title}
        />
    
      </Card>
    </Link>

  );
};

export default SingleMovie;