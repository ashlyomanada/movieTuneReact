import React from "react";
import { useFavoritesContext } from "../context/FavoritesContext";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

const Favorites = () => {
  const { favorites } = useFavoritesContext();

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center bg-black text-white">
        <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold py-5 flex gap-3 justify-center items-center">
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
