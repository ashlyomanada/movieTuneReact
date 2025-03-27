import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useToggleContext } from "../context/ToggleContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isNavShow, toggleLink, toggleNav } = useToggleContext();

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
            <NavLink
              to="/"
              className={({ isActive }) =>
                `anchor ${
                  isActive
                    ? "border-b-4 border-orange-600"
                    : "hover:border-orange-600"
                }`
              }
              onClick={() => toggleLink()}
              style={{ textShadow: "2px 2px 4px #000" }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies/popular"
              className={({ isActive }) =>
                `anchor ${
                  isActive
                    ? "border-b-4 border-orange-600"
                    : "hover:border-orange-600"
                }`
              }
              onClick={() => toggleLink()}
              style={{ textShadow: "2px 2px 4px #000" }}
            >
              Popular
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies/top-rated"
              className={({ isActive }) =>
                `anchor ${
                  isActive
                    ? "border-b-4 border-orange-600"
                    : "hover:border-orange-600"
                }`
              }
              onClick={() => toggleLink()}
              style={{ textShadow: "2px 2px 4px #000" }}
            >
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies/tv-shows"
              className={({ isActive }) =>
                `anchor ${
                  isActive
                    ? "border-b-4 border-orange-600"
                    : "hover:border-orange-600"
                }`
              }
              onClick={() => toggleLink()}
              style={{ textShadow: "2px 2px 4px #000" }}
            >
              TV Shows
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies/favorites"
              className={({ isActive }) =>
                `anchor ${
                  isActive
                    ? "border-b-4 border-orange-600"
                    : "hover:border-orange-600"
                }`
              }
              onClick={() => toggleLink()}
              style={{ textShadow: "2px 2px 4px #000" }}
            >
              Favorites
            </NavLink>
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
