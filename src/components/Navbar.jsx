import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useToggleContext } from "../context/ToggleContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isNavShow, toggleLink, toggleNav } = useToggleContext();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector("#moviesSection");
      const sectionTop = section ? section.offsetTop : 0;

      if (window.scrollY >= sectionTop - 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        className="navBar"
        style={{
          backgroundColor: isScrolled ? "black" : "transparent",
          transition: "background-color 0.3s ease-in-out", // Smooth transition
        }}
      >
        <div className="logo-container">
          <h5 style={{ textShadow: "2px 2px 4px #000" }}>MovieTune</h5>
        </div>

        <ul
          className="navLists"
          id="navlists"
          style={{
            left: isNavShow ? "-100%" : "0",
            transition: "left 0.3s ease-in-out",
          }}
        >
          <li>
            <Link
              className={`${
                location.pathname === "/" ? "border-b-4" : " "
              } anchor border-orange-600 `}
              to="/"
              onClick={() => toggleLink()}
              style={{ textShadow: "2px 2px 4px #000" }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`${
                location.pathname === "/movies/popular" ? "border-b-4" : " "
              } anchor border-orange-600 `}
              to="/movies/popular"
              onClick={() => toggleLink()}
              style={{ textShadow: "2px 2px 4px #000" }}
            >
              Popular
            </Link>
          </li>
          <li>
            <Link
              className={`${
                location.pathname === "/movies/top-rated" ? "border-b-4" : " "
              } anchor border-orange-600 `}
              to="/movies/top-rated"
              onClick={() => toggleLink()}
              style={{ textShadow: "2px 2px 4px #000" }}
            >
              Movies
            </Link>
          </li>
          <li>
            <Link
              className={`${
                location.pathname === "/movies/tv-shows" ? "border-b-4" : " "
              } anchor border-orange-600 `}
              to="/movies/tv-shows"
              onClick={() => toggleLink()}
              style={{ textShadow: "2px 2px 4px #000" }}
            >
              TV Shows
            </Link>
          </li>
          <li>
            <Link
              className={`${
                location.pathname === "/movies/favorites" ? "border-b-4" : " "
              } anchor border-orange-600 `}
              to="/movies/favorites"
              onClick={() => toggleLink()}
              style={{ textShadow: "2px 2px 4px #000" }}
            >
              Favorites
            </Link>
          </li>
        </ul>

        <button
          className="menuBtn"
          onClick={toggleNav}
          style={{ textShadow: "2px 2px 4px #000" }}
        >
          {isNavShow ? (
            <i className="fa-solid fa-bars"></i>
          ) : (
            <i className="fa-solid fa-x"></i>
          )}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
