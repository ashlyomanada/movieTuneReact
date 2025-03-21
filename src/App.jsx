import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import Popular from "./pages/Popular";
import Details from "./pages/Details";
import Watch from "./pages/Watch";
import FavoritePage from "./pages/FavoritePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/popular" element={<Popular />} />
          <Route path="/movies/top-rated" element={<Movies />} />
          <Route path="/movies/details/:id" element={<Details />} />
          <Route path="/movies/watch/:id/:server" element={<Watch />} />
          <Route path="/movies/favorites" element={<FavoritePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
