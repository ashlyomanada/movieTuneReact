import MovieCard from "../components/MovieCard";
import { getPopularMovies, searchMovies, getNowPlaying } from "../services/Api";
import { useEffect, useState } from "react";
import LandingPage from "../components/LandingPage";

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
      <LandingPage randomImage={randomImage} />
      <div
        id="moviesSection"
        className="container-fluid position-relative"
        style={{ background: "black" }}
      >
        <form
          className="d-flex gap-2 align-items-center justify-content-center"
          onSubmit={handleSearch}
          style={{ paddingTop: "20vh" }}
        >
          <input
            type="text"
            className="form-control w-auto"
            placeholder="Search for movies..."
            onChange={handleInput}
            value={searchQuery}
          />
          <button type="submit" className="signBtn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>

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
  );
}

export default Home;
