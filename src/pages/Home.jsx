import MovieCard from "../components/MovieCard";
import { searchMovies, getNowPlaying } from "../services/Api";
import { useEffect, useState } from "react";
import LandingPage from "../components/LandingPage";
import Navbar from "../components/Navbar";

function Home() {
  const [movies, setMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [randomImage, setRandomImage] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [debounceTimer, setDebounceTimer] = useState(null); // Debounce timer state

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await getNowPlaying();
        setMovies(response);
        setTrendingMovies(response);
        const shuffled = [...response].sort(() => 0.5 - Math.random());
        const randomMovies = shuffled.slice(0, 3);
        setRandomImage(randomMovies);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, []);

  const handleInput = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (debounceTimer) clearTimeout(debounceTimer); // Clear previous timer

    const newTimer = setTimeout(async () => {
      if (value.trim() === "") {
        setMovies(trendingMovies);
        setIsSearch(false);
      } else {
        try {
          const response = await searchMovies(value);
          setMovies(response);
          setIsSearch(true);
        } catch (error) {
          console.error("Search failed:", error);
        }
      }
    }, 500); // 500ms debounce delay

    setDebounceTimer(newTimer); // Set new timer
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (debounceTimer) clearTimeout(debounceTimer); // Ensure no pending debounce call
    try {
      const response = await searchMovies(searchQuery);
      setMovies(response);
      setIsSearch(true);
    } catch (error) {
      console.error("Search failed:", error);
    }
  };

  return (
    <>
      <Navbar />
      {loading ? (
        <div id="loaderSection" className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <LandingPage randomImage={randomImage} />
          <div
            id="moviesSection"
            className="container-fluid position-relative"
            style={{ background: "black" }}
          >
            <div className="flex justify-center  py-5">
              <form
                className="flex flex-wrap gap-2 align-items-stretch justify-content-center"
                onSubmit={handleSearch}
              >
                <input
                  type="text"
                  className="py-2 px-3 w-[75%] md:w-auto rounded-md bg-white text-xl"
                  placeholder="Search for movies..."
                  onChange={handleInput}
                  value={searchQuery}
                />
                <button
                  type="submit"
                  className="signBtn flex items-center justify-center gap-2"
                >
                  <i className="flex md:hidden fa-solid fa-magnifying-glass"></i>
                  <span className="hidden md:flex">Search</span>
                </button>
              </form>
            </div>

            <div className="flex justify-center items-center py-3">
              <h1 className="text-xl sm:text-2xl md:text-3xl flex gap-3 items-center text-white lg:pb-4">
                <i class="fa-solid fa-fire-flame-curved text-orange-600"></i>
                Popular Movies
              </h1>
            </div>

            {loading ? (
              <div id="loaderSection" className="loader-container">
                <div className="loader"></div>
              </div>
            ) : (
              <MovieCard
                movies={movies}
                isSearch={isSearch}
                searchQuery={searchQuery}
              />
            )}
          </div>
        </>
      )}
    </>
  );
}

export default Home;
