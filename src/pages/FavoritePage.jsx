import React from "react";
import { useFavoritesContext } from "../context/FavoritesContext";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

const Favorites = () => {
  const { favorites } = useFavoritesContext();

  return (
    <>
      <Navbar />
      <div className="min-h-screen text-white flex flex-col items-center gap-3 justify-center py-20 lg:py-14 lg:px-20">
        <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold flex gap-3 justify-center items-center pt-3 md:pt-5">
          <i class="fa-solid fa-clapperboard text-orange-600 "></i> Favorite
          Movies
        </h1>
        {favorites.length > 0 ? (
          <Card movies={favorites} />
        ) : (
          <div className="flex justify-center items-center h-60 w-full">
            <h2 className="text-xl sm:text-2xl md:text-3xl text-orange-600">
              NO FAVORITES YET <i class="fa-solid fa-heart"></i>
            </h2>
          </div>
        )}
      </div>
    </>
  );
};

export default Favorites;
