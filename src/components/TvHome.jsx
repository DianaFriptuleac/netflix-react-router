import MainMovieSection from "./MainMovieSection";
import MovieSection from "./MovieSection";

const TvHome = () => {
  return (
    <>
      <MainMovieSection />
      <MovieSection saga="Harry Potter" />
      <MovieSection saga="Lord of the Rings" />
      <MovieSection saga="Star Wars" />
      <MovieSection saga="Fast" />
      <MovieSection saga="Disney" />
    </>
  );
};
export default TvHome;
