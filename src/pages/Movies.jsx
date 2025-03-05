import React from "react";
import { useState, useEffect } from "react";
import { getTopRatedMovies } from "../services/Api";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

const Movies = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTopRatedMovies = async () => {
    try {
      const response = await getTopRatedMovies();
      setTopRatedMovies(response);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTopRatedMovies();
  }, []);
  return (
    <>
      <Navbar />
      <div className="min-h-screen text-white flex flex-col items-center justify-center py-20">
        <h1 className="py-3">Top Rated Movies</h1>
        {loading ? (
          <div id="loaderSection" className="loader-container">
            <div className="loader"></div>
          </div>
        ) : (
          <Card movies={topRatedMovies} />
        )}
      </div>
    </>
  );
};

export default Movies;
