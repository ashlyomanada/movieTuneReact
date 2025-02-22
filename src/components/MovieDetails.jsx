import React, { useState, useEffect } from "react";

const MovieDetails = ({ selectedDetails, closeModal }) => {
  const [selectedServer, setSelectedServer] = useState("");

  useEffect(() => {
    if (selectedDetails) {
      setSelectedServer(selectedDetails.streaming_site_1 || "");
    }
  }, [selectedDetails]);

  const getVoteColor = (vote) => {
    if (vote > 8) return "green";
    if (vote >= 5) return "orange";
    return "red";
  };

  const handleSelectedPlay = () => {
    const modalElement = document.getElementById("movieModal");
    const modalInstance = new bootstrap.Modal(modalElement);
    modalInstance.show();
  };

  if (!selectedDetails) return null;

  return (
    <>
      <div
        className="h-screen w-screen flex justify-center fixed z-50 top-0 left-0 bg-black text-white "
        style={{
          background: `url(https://image.tmdb.org/t/p/w1280${selectedDetails.backdrop_path})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          className="flex justify-center flex-col lg:flex-row"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="hidden lg:w-1/4 p-5 lg:flex items-center justify-center">
            <img
              className=" md:h-96 lg:flex object-contain"
              src={`https://image.tmdb.org/t/p/w1280${selectedDetails.poster_path}`}
              alt={selectedDetails.title}
            />
          </div>

          <div className="lg:w-1/2 flex items-center justify-center ">
            <div className="h-full p-3 md:p-5 flex flex-col gap-2 justify-center">
              <h3>{selectedDetails.title}</h3>
              <p className="text-justify">{selectedDetails.overview}</p>
              <p>Released: {selectedDetails.release_date}</p>
              <p>
                Rating:
                <span className={getVoteColor(selectedDetails.vote_average)}>
                  {selectedDetails.vote_average.toFixed(2)}
                </span>
              </p>
              {selectedDetails.streaming_site_1 ? (
                <select
                  className="form-control flex self-start w-auto"
                  value={selectedServer}
                  onChange={(e) => setSelectedServer(e.target.value)}
                >
                  <option value={selectedDetails.streaming_site_1}>
                    Server 1
                  </option>
                  {selectedDetails.streaming_site_2 && (
                    <option value={selectedDetails.streaming_site_2}>
                      Server 2
                    </option>
                  )}
                  {selectedDetails.streaming_site_3 && (
                    <option value={selectedDetails.streaming_site_3}>
                      Server 3
                    </option>
                  )}
                </select>
              ) : (
                <h5>No Server Found</h5>
              )}
              <div className="btnContainers">
                {selectedDetails.streaming_site_1 && (
                  <button className="signBtn" onClick={handleSelectedPlay}>
                    Watch Movie
                  </button>
                )}
                <button
                  className="closeBtn bg-white text-black"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="movieModal"
        tabIndex="-1"
        aria-labelledby="trailerModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content" style={{ backgroundColor: "black" }}>
            <div className="modal-header" style={{ color: "white" }}>
              <h5 className="modal-title" id="trailerModalLabel">
                Watch Movie
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <iframe
                width="100%"
                height="400"
                frameBorder="0"
                src={selectedServer}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
