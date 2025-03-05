import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSelectedMovieDetails } from "../services/Api.js";
import { Link, useNavigate } from "react-router-dom";
const Details = () => {
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchMovieDetails = async () => {
    try {
      const response = await getSelectedMovieDetails(id);
      setDetails(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, []);
  return isLoading ? (
    <div id="loaderSection" className="loader-container">
      <div className="loader"></div>
    </div>
  ) : (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${details.backdrop_path})`,
        backgroundSize: "cover",
      }}
    >
      <div className="min-h-screen bg-[rgba(0,0,0,0.5)] flex">
        <div className="flex flex-col  lg:flex-row justify-center items-center md:gap-4">
          <div className="w-full md:flex md:justify-center lg:w-auto p-3">
            <img
              src={`https://image.tmdb.org/t/p/w1280${details.poster_path}`}
              alt=""
              className="flex justify-self-start h-52 md:h-96 object-contain"
            />
          </div>
          <div className=" text-white flex flex-col items-start w-full p-3 md:p-0 md:w-2/3">
            <h1>{details.title}</h1>
            <p>Overview : {details.overview}</p>
            <p>Release Date : {details.release_date}</p>
            <p>Vote Average : {details.vote_average}</p>
            <div className="flex gap-3 flex-wrap">
              {details.genres.length > 0 &&
                details.genres.map((genre) => (
                  <button
                    key={genre.id}
                    className="bg-[#1f1f1f] py-2 px-3 rounded-full"
                  >
                    {genre.name}
                  </button>
                ))}
            </div>

            <select className="py-2 px-4 mt-4 rounded-md" name="" id="">
              <option value={details.streaming_site_1}>Server 1</option>
              <option value={details.streaming_site_2}>Server 2</option>
              <option value={details.streaming_site_3}>Server 3</option>
            </select>

            <div className="flex gap-2 items-center">
              <button className="py-2 px-4 mt-4 rounded-md bg-orange-600">
                Play Now
              </button>

              <button
                className="py-2 px-4 mt-4 rounded-md bg-[#1f1f1f]"
                onClick={() => navigate(-1)}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
