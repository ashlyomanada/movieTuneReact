import React, { useState, useEffect } from "react";
import { useFavoritesContext } from "../context/FavoritesContext";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

const Favorites = () => {
  const { favorites } = useFavoritesContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [favorites]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen text-white flex flex-col items-center gap-3 justify-center py-20 lg:py-14 lg:px-20 bg-black">
        <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold flex gap-3 justify-center items-center pt-3 md:pt-5">
          <i className="fa-solid fa-clapperboard text-orange-600"></i> Favorite
          Movies
        </h1>

        {loading ? (
          <div id="loaderSection" className="loader-container">
            <div className="loader"></div>
          </div>
        ) : favorites.length > 0 ? (
          <Card movies={favorites} />
        ) : (
          <div className="flex justify-center items-center h-60 w-full">
            <h2 className="text-xl sm:text-2xl md:text-3xl text-orange-600">
              NO FAVORITES YET <i className="fa-solid fa-heart"></i>
            </h2>
          </div>
        )}
      </div>
    </>
  );
};

export default Favorites;
