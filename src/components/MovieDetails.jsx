import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Spinner, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { movieId } = useParams(); // movieId da URL
  const [movieDetails, setMovieDetails] = useState(null);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = () => {
      fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=5ace13d8`)
        .then((resp) => {
          if (resp.ok) {
            return resp.json();
          } else {
            throw new Error("La chiamata è andata male!");
          }
        })
        .then((data) => {
          setMovieDetails(data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log("Errore nel recupero dati", err);
          setIsLoading(false);
          setIsError(true);
        });
    };

    const fetchComments = () => {
      fetch("https://striveschool-api.herokuapp.com/api/comments/:elementId", {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNjJlYWYyNjBjYzAwMTVjYzBkZWUiLCJpYXQiOjE3MjQ4NTcxOTksImV4cCI6MTcyNjA2Njc5OX0.D-p2Gln41A72gswFv4FBLYEq2WtUIqAUmmH-aZrEgBo",
        },
      })
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

    fetchMovieDetails();
    fetchComments();
  }, [movieId]); // Assicurati che movieId sia l'unica dipendenza

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
          <Col md={8} className="text-light">
            <h5>Movie Comments</h5>
            {comments.length > 0 ? (
              <ul>
                {comments.map((comment, index) => (
                  <li key={index}>{comment.text}</li>
                ))}
              </ul>
            ) : (
              <p>Non ci sono commenti per questo Libro.</p>
            )}
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default MovieDetails;

