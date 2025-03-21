import { Link } from "react-router-dom";
const LandingPage = ({ randomImage }) => {
  return (
    <>
      <div className="flex">
        <div
          id="carouselExampleIndicators"
          className="carousel slide w-screen"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            {randomImage.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>

          <div className="carousel-inner">
            {randomImage.map((movie, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                style={{ transition: "transform 1s ease-in-out" }}
              >
                <div className="movieInfo">
                  <h1 className="movieTitle">{movie.title}</h1>
                  <Link
                    to={`/movies/details/${movie.id}`}
                    className="signBtn no-underline"
                  >
                    Watch Now
                  </Link>
                </div>
                <img
                  src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`} // Replace `imageUrl` with the correct property name from your API
                  className="d-block w-full"
                  alt={movie.title || "Movie"}
                  style={{ height: "100vh", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
