import React, { useState, useEffect } from "react";
import { getTopRatedMovies } from "../services/Api";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

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
      <Navbar />
      <div className="min-h-screen text-white flex flex-col items-center justify-center py-20 lg:py-14 lg:px-20 bg-black">
        {loading ? (
          <div id="loaderSection" className="loader-container">
            <div className="loader"></div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 pt-3 md:pt-5">
            <h1 className="text-xl sm:text-2xl md:text-3xl flex gap-3 items-center lg:pt-5">
              <i className="fa-solid fa-star text-orange-600"></i> Top Rated
              Movies
            </h1>
            <Card movies={topRatedMovies} />
          </div>
        )}
      </div>
    </>
  );
};

export default Movies;
