import React from "react";
import { getGenre } from "../services/Api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Genre = () => {
  const [genre, setGenre] = useState([]);
  const fetchGenre = async () => {
    const response = await getGenre();
    // console.log(response);
    setGenre(response);
  };

  useEffect(() => {
    fetchGenre();
  }, []);
  return (
    <div className="flex items-center justify-center flex-wrap lg:py-5 lg:px-20 gap-3">
      {genre.map((gen) => (
        <Link
          to={`/movies/genre/${gen.id}`}
          key={gen.id}
          className="signBtn no-underline"
        >
          {gen.name}
        </Link>
      ))}
    </div>
  );
};

export default Genre;
