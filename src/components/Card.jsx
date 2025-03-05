import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ movies }) => {
  const [imageLoad, setImageLoad] = useState({});

  const handleImageLoad = (id) => {
    setImageLoad((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 place-items-center px-3">
      {movies.map((movie, index) => (
        <div
          className="flex flex-col gap-2 w-full"
          key={`${movie.id}-${index}`}
        >
          <Link
            to={`/movies/details/${movie.id}`}
            className="flex justify-center items-stretch"
          >
            {!imageLoad[movie.id] && (
              <div className="skeleton aspect-[2/3] w-full"></div>
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
          <div className="text-center flex flex-col items-center justify-center h-20">
            <h5 className="title">{movie.title}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
