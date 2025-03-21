import React, { useState } from "react";
import { useSearchContext } from "../context/SearchContext";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const { handleSearchVal } = useSearchContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() !== "") {
      handleSearchVal(value);
    }
  };

  return (
    <form
      className="flex flex-wrap gap-2 items-stretch justify-center py-5"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="py-2 px-2 md:px-5 text-center w-auto rounded-md bg-white text-black lg:text-xl"
        placeholder="Search for movies..."
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button type="submit" className="signBtn">
        <span className="hidden md:flex">Search</span>{" "}
        <i className="flex md:hidden fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
};

export default SearchBar;
