import Home from "./pages/Home";
import "./App.css";
import GptLayout from "./pages/GptLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import Popular from "./pages/Popular";
import Details from "./pages/Details";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/popular" element={<Popular />} />
          <Route path="/movies/topRated" element={<Movies />} />
          <Route path="/movies/details/:id" element={<Details />} />
        </Routes>
      </Router>

      {/* <GptLayout /> */}
    </>
  );
}

export default App;
