import Home from "./pages/Home";
import "./App.css";
import "./style/style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import Popular from "./pages/Popular";
import Details from "./pages/Details";
import Watch from "./pages/Watch";
import FavoritePage from "./pages/FavoritePage";
import GenrePage from "./pages/GenrePage";
import TvShows from "./pages/TvShows";
import ToggleContext from "./context/ToggleContext";
import TvshowsDetails from "./pages/TvshowsDetails";
import Episodes from "./components/Episodes";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <ToggleContext>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies/popular" element={<Popular />} />
            <Route path="/movies/top-rated" element={<Movies />} />
            <Route path="/movies/tv-shows" element={<TvShows />} />
            <Route path="/movies/details/:id" element={<Details />} />
            <Route path="/movies/watch/:id/:server" element={<Watch />} />
            <Route path="/movies/favorites" element={<FavoritePage />} />
            <Route path="/movies/genre/:id" element={<GenrePage />} />
            <Route path="/tvShows/details/:id" element={<TvshowsDetails />} />
            <Route
              path="/tvShows/:id/season/:seasonNumber/episodes"
              element={<Episodes />}
            />
          </Routes>
          {/* <Footer /> */}
        </ToggleContext>
      </Router>
    </>
  );
}

export default App;
