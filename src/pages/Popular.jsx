import React from "react";
import { useState, useEffect } from "react";
import { getPopularMovies } from "../services/Api.js";
import Card from "../components/Card.jsx";
import Navbar from "../components/Navbar.jsx";

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
      <Navbar />
      <div className="min-h-screen text-white flex flex-col items-center justify-center md:py-20 lg:py-14 lg:px-20">
        <h1 className="py-3"> Popular Movies</h1>

        {loading ? (
          <div id="loaderSection" className="loader-container">
            <div className="loader"></div>
          </div>
        ) : (
          <Card movies={popularMovies} />
        )}
      </div>
    </>
  );
};

export default Popular;
