import React, { useState, useEffect } from "react";
import { Col, Container, Row, Spinner, Alert } from "react-bootstrap";
import SingleMovie from "./SingleMovie"; // Importiamo il nuovo componente

const MovieSection = ({ saga }) => {
  const [mymovies, setMymovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [movieSelected, setMovieSelected] = useState(null);

  //state = {
  // mymovies: [],
  // isLoading: true,
  // isError: false,
  //movieSelected: null, // per selezionare le card
  // };

  useEffect(() => {
    fetchAllMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [saga]);

  //componentDidMount() {
  // this.fetchAllMovies();
  // }

  const fetchAllMovies = () => {
    fetch(`http://www.omdbapi.com/?s=${saga}&apikey=80031566`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("LA CHIAMATA NON È ANDATA A BUON FINE!");
        }
      })
      .then((data) => {
        console.log("MY MOVIES", data);
        setMymovies(data.Search || []); // Imposta mymovies con l'array "Search" o un array vuoto se non esiste
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("ERRORE NEL RECUPERO DATI", error);
        setIsLoading(false);
        setIsError(true);
      });
  };

  const toggleMovieDetails = (idMovie) => {
    setMovieSelected((prevMovieSelected) =>
      prevMovieSelected === idMovie ? null : idMovie
    );
  };

  console.log("Render invocato");

  return (
    <Container className="my-5">
      <Row className="mb-3">
        <Col>
          <h4 className="text-light">{saga}</h4>
        </Col>
      </Row>
      <Row>
        {isLoading && (
          <Col className="d-flex justify-content-center">
            <Spinner animation="border" variant="secondary" />
          </Col>
        )}
        {isError && (
          <Col className="d-flex justify-content-center">
            <Alert variant="danger">Errore nel recupero dei film!</Alert>
          </Col>
        )}
        {!isLoading &&
          !isError &&
          mymovies.length > 0 &&
          mymovies.map((movie) => (
            <Col
              xs={12}
              sm={6}
              md={4}
              lg={2}
              key={movie.imdbID}
              className="mb-4"
            >
              <SingleMovie
                movie={movie}
                isSelected={movieSelected === movie.imdbID}
                onMovieSelect={toggleMovieDetails}
              />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default MovieSection;
