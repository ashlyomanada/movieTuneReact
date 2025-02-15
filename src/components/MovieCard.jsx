import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../style/style.css";
import MovieDetails from "./MovieDetails";
import { getSelectedMovieDetails } from "../services/Api";

function MovieCard({ movies, isSearch, searchQuery }) {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedDetails, setSelectedDetails] = useState(null);

  const handleSelectedMovie = async (movie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedDetails(null);
  };

  useEffect(() => {
    if (!selectedMovie) return;

    const fetchMovieDetails = async () => {
      try {
        const response = await getSelectedMovieDetails(selectedMovie.id);
        setSelectedDetails(response);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [selectedMovie]);

  return (
    <>
      <div id="moviesSection" className="movieSection">
        <div className="movieSectionContainer">
          {!isSearch ? <h3>Trending</h3> : <h3>Results for "{searchQuery}"</h3>}
          <div className="movieboxesContainer">
            {movies.map((movie) => (
              <div
                className="movieBox"
                key={movie.id}
                onClick={() => handleSelectedMovie(movie)}
              >
                <div className="moviePosterContainer">
                  <img
                    className="moviePoster"
                    src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
                    alt={movie.title}
                  />
                </div>
                <div className="movieInfos">
                  <h5 className="title">{movie.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <MovieDetails selectedDetails={selectedDetails} closeModal={closeModal} />
    </>
  );
}

export default MovieCard;
