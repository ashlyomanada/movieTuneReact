import React from "react";
import { useState, useEffect } from "react";
import { getPopularMovies } from "../services/Api.js";
import Card from "../components/Card.jsx";

const Popular = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPopular = async () => {
    try {
      const response = await getPopularMovies();
      setPopularMovies(response);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPopular();
  }, []);
  return (
    <>
      <div className="min-h-screen text-white flex flex-col items-center justify-center py-20 lg:py-14 lg:px-20">
        {loading ? (
          <div id="loaderSection" className="loader-container">
            <div className="loader"></div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 pt-3">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Popular Movies
            </h1>
            <Card movies={popularMovies} />
          </div>
        )}
      </div>
    </>
  );
};

export default Popular;
