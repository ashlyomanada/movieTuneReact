import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../style/style.css";
import Card from "./Card";
import { searchMovies } from "../services/Api";

function MovieCard({ movies }) {
  return (
    <>
      <div className="min-h-screen text-white lg:px-20">
        <Card movies={movies} />
      </div>
    </>
  );
}

export default MovieCard;
