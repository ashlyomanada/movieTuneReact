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

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await searchMovies(searchQuery);
    setMovies(response);
    setIsSearch(true);
  };

  const handleInput = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value.trim() === "") {
      setMovies(trendingMovies);
      setIsSearch(false);
    }
  };

  return (
    <>
      <LandingPage randomImage={randomImage} />
      <div className="container-fluid" style={{ background: "black" }}>
        <form
          className="d-flex gap-2 align-items-center justify-content-center"
          onSubmit={handleSearch}
          style={{ paddingTop: "20vh" }}
        >
          <input
            type="text"
            className="form-control w-50"
            placeholder="Search for movies..."
            onChange={handleInput}
            value={searchQuery}
            required
          />
          <button type="submit" className="signBtn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <MovieCard
              movies={movies}
              isSearch={isSearch}
              searchQuery={searchQuery}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
