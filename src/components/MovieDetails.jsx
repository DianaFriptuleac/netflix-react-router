import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Spinner, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { movieId } = useParams(); //movieId da URL
  const [movieDetails, setMovieDetails] = useState(null);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchMovieDetails()
    fetchComments()
  }, [movieId]);

  const fetchMovieDetails = () => {
    fetchMovieDetails(`http://www.omdbapi.com/?i=${movieId}&apikey=80031566`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("La chiamata e andata male!");
        }
      })
      .then((data) => {
        setMovieDetails(data);
        setIsLoading(true);
      })
      .catch((err) => {
        console.lof("Errore nel recupero dati", err);
        setIsLoading(false);
        setIsError(true);
      });
  };

  const fetchComments = () => {
    fetch(`https://example.com/api/movies/${movieId}/comments`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("LA CHIAMATA AI COMMENTI NON È ANDATA A BUON FINE!");
        }
      })
      .then((data) => {
        setComments(data);
      })
      .catch((err) => {
        console.log("ERRORE NEL RECUPERO DEI COMMENTI", err);
        setIsError(true);
      });
  };

  if (isLoading) {
    return (
      <Container className="my-5 d-flex justify-content-center">
        <Spinner animation="border" variant="secondary" />
      </Container>
    );
  }

  if (isError) {
    return (
      <Container className="my-5 d-flex justify-content-center">
        <Alert variant="danger">Errore nel recupero dei dettagli del film!</Alert>
      </Container>
    );
  }
  return (
    <Container>
      {movieDetails && (
        <Row>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src={
                  movieDetails.Poster !== "N/A"
                    ? movieDetails.Poster
                    : "https://via.placeholder.com/300x450?text=No+Image"
                }
                alt={movieDetails.Title}
              />
              <Card.Body>
                <Card.Title>{movieDetails.Title}</Card.Title>
                <Card.Text>
                  Year: {movieDetails.Year} - Genre: {movieDetails.Genre} -
                  Plot: {movieDetails.Plot}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={8}>
            <h5>Movie Comments</h5>
            {comments.length > 0 ? (
              <ul>
                {comments.map((comment, index) => (
                  <li key={index}>{comment.text}</li>
                ))}
              </ul>
            ) : (
              <p>No comments available for this movie.</p>
            )}
          </Col>
        </Row>
      )}
    </Container>
  );
};
export default MovieDetails;
