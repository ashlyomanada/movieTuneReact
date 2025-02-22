import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../style/style.css";
import MovieDetails from "./MovieDetails";
import { getSelectedMovieDetails } from "../services/Api";

function MovieCard({ movies, isSearch, searchQuery }) {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedDetails, setSelectedDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleSelectedMovie = async (movie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedDetails(null);
  };

  const [imageLoaded, setImageLoaded] = useState({});

  const handleImageLoad = (id) => {
    setImageLoaded((prev) => ({ ...prev, [id]: true }));
  };

  useEffect(() => {
    if (!selectedMovie) return;

    const fetchMovieDetails = async () => {
      try {
        const response = await getSelectedMovieDetails(selectedMovie.id);
        setSelectedDetails(response);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, [selectedMovie]);

  return (
    <>
      <div className="min-h-screen text-white pt-5">
        <div className="h-full flex flex-col items-center justify-center gap-3">
          {!isSearch ? (
            <h3 className="text-center">Trending</h3>
          ) : (
            <h3 className="text-center">Results for "{searchQuery}"</h3>
          )}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5 md:grid-cols-6 md:px-10 lg:grid-cols-7 lg:px-20 place-items-center">
            {movies.map((movie, index) => (
              <div
                className="flex flex-col gap-2"
                key={`${movie.id}-${index}`} // Combine id and index for uniqueness
                onClick={() => handleSelectedMovie(movie)}
              >
                <div className="flex justify-center">
                  {!imageLoaded[movie.id] && <div className="loader2"></div>}
                  <img
                    className="object-contain"
                    src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
                    alt={movie.title}
                    onLoad={() => handleImageLoad(movie.id)}
                    style={{
                      display: imageLoaded[movie.id] ? "block" : "none",
                    }}
                  />
                </div>
                <div className="text-center flex flex-col items-center justify-center h-20">
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
