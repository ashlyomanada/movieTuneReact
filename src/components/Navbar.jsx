import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false); // Fixed typo from 'setIsIcrolled' to 'setIsScrolled'
  const [isNavShow, setIsNavShow] = useState(true);
  const location = useLocation();

  const toggleNav = () => {
    setIsNavShow(!isNavShow);
  };

  const toggleLink = () => {
    setIsNavShow(true);
  };

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
          <h5>MovieTune</h5>
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
            >
              Movies
            </Link>
          </li>
          <li>
            <Link
              className={`${
                location.pathname === "/movies/favorites" ? "border-b-4" : " "
              } anchor border-orange-600 `}
              to="/movies/favorites"
              onClick={() => toggleLink()}
            >
              Favorites
            </Link>
          </li>
        </ul>

        <button className="menuBtn" onClick={toggleNav}>
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
