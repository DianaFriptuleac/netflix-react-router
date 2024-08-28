import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Spinner,
  Alert,
  Button,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const MovieDetails = () => {
  const { movieId } = useParams(); // movieId da URL
  console.log("movie id", movieId);

  const navigate = useNavigate()

  const [movieDetails, setMovieDetails] = useState(null);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchMovieDetails = () => {
    fetch("http://www.omdbapi.com/?apikey=5ace13d8&i=" + movieId)
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
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + movieId, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNjJlYWYyNjBjYzAwMTVjYzBkZWUiLCJpYXQiOjE3MjQ4NTcxOTksImV4cCI6MTcyNjA2Njc5OX0.D-p2Gln41A72gswFv4FBLYEq2WtUIqAUmmH-aZrEgBo",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("LA CHIAMATA AI COMMENTI NON È ANDATA A BUON FINE!");
        }
      })
      .then((movieComments) => {
        setComments(movieComments)
      })
      .catch((err) => {
        console.log("ERRORE NEL RECUPERO DEI COMMENTI", err);
        setIsError(true);
      });
  };

  useEffect(() => {
    fetchMovieDetails();
    fetchComments();
  }, []);



  if (isError) {
    return (
      <Container className="my-5 d-flex justify-content-center">
        <Alert variant="danger">
          Errore nel recupero dei dettagli del film!
        </Alert>
      </Container>
    );
  }



return (
  <Container>
      {movieDetails ? (
        <Row className="justify-content-center my-3" >
            <Col xs={12} md={8}>
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
            <Card.Text>{movieDetails.Plot}</Card.Text>
            <Card.Text>
              {movieDetails.Director} - {movieDetails.Year}
            </Card.Text>
            <Button
              variant="primary"
              onClick={() => {
                navigate('/')
              }}
            >
              Torna alla HomePage
            </Button>
          </Card.Body>
        </Card>
        </Col>
        </Row>
      ) : (
        <div className="text-center">
          <Spinner animation="border" variant="warning" />
        </div>
      )}
      <h4 className="text-center text-light mb-3">Movie Comments</h4>
      <ListGroup className="mb-3">
        {comments.length > 0 ? (
          comments.map((c) => {
            return <ListGroup.Item key={c._id}>{c.comment}</ListGroup.Item>
          })
        ) : (
          <ListGroup.Item>
            Non ci sono recensioni per questo film
          </ListGroup.Item>
        )}
      </ListGroup>
   
      </Container>
  )
}

export default MovieDetails
