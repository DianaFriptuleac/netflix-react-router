import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleMovie = ({ movie, isSelected }) => {
  return (
    <Link to={`/movieDetails/${movie.imdbID}`} style={{ textDecoration: 'none' }}>
      <Card className="h-100 movieCard">
        <Card.Img
          variant="top"
          className="h-100"
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"}
          alt={movie.Title}
        />
        {isSelected && (
          <Card.Body className="p-2">
            <Card.Title className="titleCard">{movie.Title}</Card.Title>
            <Card.Text className="textCard">Year: {movie.Year}</Card.Text>
          </Card.Body>
        )}
      </Card>
    </Link>
  );
};

export default SingleMovie;