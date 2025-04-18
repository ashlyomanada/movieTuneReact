import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useFavoritesContext } from "../context/FavoritesContext";
import { useLoaderContext } from "../context/LoaderContext";

const Card = ({ movies }) => {
  const [imageLoad, setImageLoad] = useState({});
  const location = useLocation();
  const { id } = useParams();
  const { favorites, addToFavorites, removeFromFavorites } =
    useFavoritesContext();
  const { setIsLoading } = useLoaderContext();
  const isFavorite = (movie) => favorites.some((fav) => fav.id === movie.id);

  const handleImageLoad = (id) => {
    setImageLoad((prev) => ({ ...prev, [id]: true }));
  };

  const handleScrollTop = () => {
    if (location.pathname == `/movies/details/${id}`) {
      window.scrollTo(0, 0);
      setIsLoading(true);
    }
    setIsLoading(true);
  };

  return (
    <div className="container mx-auto px-3 ">
      {movies && movies.length > 0 ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 place-items-center">
          {movies.map((movie, index) => (
            <div
              className="flex flex-col gap-2 w-full relative "
              key={`${movie.id}-${index}`}
            >
              <Link
                to={`/movies/details/${movie.id}`}
                className="flex justify-center items-stretch relative group"
                onClick={handleScrollTop}
              >
                {!imageLoad[movie.id] && (
                  <div className="skeleton aspect-[2/3] w-full bg-gray-300 animate-pulse"></div>
                )}
                <img
                  className="object-contain"
                  src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
                  alt={movie.title}
                  onLoad={() => handleImageLoad(movie.id)}
                  style={{
                    display: imageLoad[movie.id] ? "block" : "none",
                  }}
                />
              </Link>

              {isFavorite(movie) ? (
                <button
                  className="absolute top-0 right-1 text-2xl rounded-full text-red-600 p-1"
                  onClick={() => removeFromFavorites(movie.id)}
                >
                  <i className="fa-solid fa-heart"></i>
                </button>
              ) : (
                <button
                  className="absolute top-0 right-1 text-2xl rounded-full text-red-600 p-1"
                  onClick={() => addToFavorites(movie)}
                >
                  <i className="fa-regular fa-heart"></i>
                </button>
              )}

              <div className="text-center flex flex-col items-center justify-center min-h-20">
                <h5 className="title text-white text-sm md:text-base lg:text-lg">
                  {movie.title}
                </h5>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center w-full">
          <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-semibold">
            <i className="fa-solid fa-clapperboard text-orange-600 "></i> No
            movies found.
          </h1>
        </div>
      )}
    </div>
  );
};

export default Card;
