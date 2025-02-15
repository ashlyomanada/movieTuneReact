import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false); // Fixed typo from 'setIsIcrolled' to 'setIsScrolled'
  const [isNavShow, setIsNavShow] = useState(true);

  const toggleNav = () => {
    setIsNavShow(!isNavShow);
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
            <a className="anchor" href="#carouselExampleIndicators">
              Home
            </a>
          </li>
          <li>
            <a className="anchor" href="#moviesSection">
              Trending
            </a>
          </li>
          <li>
            <a className="anchor" href="#">
              Movies
            </a>
          </li>
          <li>
            <a className="anchor" href="#">
              Newsletter
            </a>
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
