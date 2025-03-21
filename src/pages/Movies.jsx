import React, { useState, useEffect } from "react";
import { getTopRatedMovies } from "../services/Api";
import Card from "../components/Card";

const Movies = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTopRatedMovies = async () => {
    setLoading(true);
    try {
      const response = await getTopRatedMovies();
      setTopRatedMovies(response);
    } catch (e) {
      console.error("Error fetching top movies:", e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchTopRatedMovies();
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
            <h1 className="text-4xl">Top Rated Movies</h1>
            <Card movies={topRatedMovies} />
          </div>
        )}
      </div>
    </>
  );
};

export default Movies;
