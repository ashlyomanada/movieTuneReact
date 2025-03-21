import React from "react";
import { useFavoritesContext } from "../context/FavoritesContext";
import Card from "../components/Card";

const Favorites = () => {
  const { favorites } = useFavoritesContext();

  return (
    <div className="min-h-screen flex flex-col justify-center bg-black text-white">
      <h1 className="text-center text-3xl font-bold py-5">
        🎬 My Favorite Movies
      </h1>
      {favorites.length > 0 ? (
        <Card movies={favorites} />
      ) : (
        <div className="flex justify-center items-center h-60 w-full">
          <h2 className="text-2xl text-white">
            No favorites yet. Add some movies to your list! ❤️
          </h2>
        </div>
      )}
    </div>
  );
};

export default Favorites;
