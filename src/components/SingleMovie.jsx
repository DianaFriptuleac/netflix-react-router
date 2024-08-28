import { Card } from "react-bootstrap";

const SingleMovie = ({ movie, isSelected, onMovieSelect }) => {
  const handleCardClick = () => {
    onMovieSelect(movie.imdbID);
  };

  return (
    <Card onClick={handleCardClick} className="h-100 movieCard">
      <Card.Img
        variant="top"
        className="h-100"
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x450?text=No+Image"
        } //per i film che non hanno il poster
        alt={movie.Title}
      />
      {isSelected && (
        <Card.Body className="p-2">
          <Card.Title className="titleCard">{movie.Title}</Card.Title>
          <Card.Text className="textCard">Year: {movie.Year}</Card.Text>
        </Card.Body>
      )}
    </Card>
  );
};

export default SingleMovie;
