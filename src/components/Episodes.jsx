import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEpisodes } from "../services/Tmdb";
import { getTvShowOverview } from "../services/Api";
import { Link } from "react-router-dom";

const Episodes = () => {
  const [showEpisodes, setShowEpisodes] = useState([]);
  const [curSeason, setCurSeason] = useState(null);
  const [seasonName, setSeasonName] = useState(null);
  const [details, setDetails] = useState([]);
  const { id, seasonNumber } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const fetchEpisodes = async () => {
    setIsLoading(true);
    try {
      const response = await getEpisodes(id, seasonNumber);
      setSeasonName(response.name);
      setCurSeason(response.season_number);
      //   console.log("episodes:", response.episodes);
      setShowEpisodes(response.episodes);
    } catch (error) {
      console.error("Error fetching episodes:", error);
      setIsLoading(true);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchTvShowDetails = async () => {
    try {
      const response = await getTvShowOverview(id);
      const seasonIndex =
        parseInt(seasonNumber) === 1 ? 0 : parseInt(seasonNumber) - 1;

      if (response.seasons && response.seasons.length > seasonIndex) {
        const episodesData = response.seasons[seasonIndex]?.episodes || [];
        setDetails(episodesData);
        // console.log("Fetched Details:", episodesData);
      } else {
        console.error("Invalid season number or no data available.");
        setDetails([]);
      }
    } catch (error) {
      console.error("Error fetching TV show details:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEpisodes();
    fetchTvShowDetails();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-start px-3  md:px-10 lg:px-20 py-10 bg-black gap-3 text-white">
      <div className="flex sticky top-0 bg-black py-3 justify-between items-center w-full">
        <h3>
          Season {curSeason} :{" "}
          <span className="text-md text-orange-500">{seasonName}</span>
        </h3>
        <button
          className="py-2 px-4 rounded-md bg-[#1f1f1f] text-white"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 pb-20">
        {isLoading ? (
          <div id="loaderSection" className="loader-container">
            <div className="loader"></div>
          </div>
        ) : showEpisodes.length > 0 ? (
          showEpisodes.map((episode, index) => {
            const detail = details.find(
              (detail) => detail.episode === episode.episode_number
            );

            return (
              <div className="flex flex-col" key={index}>
                <Link
                  to={detail?.tvplayer_url || "#"}
                  key={index}
                  className="no-underline text-white"
                >
                  <div className="flex aspect-video">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${episode.still_path}`}
                      alt={episode.name}
                      className="w-full h-auto rounded-md object-cover"
                    />
                  </div>
                  <div className="flex flex-col p-2 gap-1">
                    <span className="text-orange-500">
                      Episode {episode.episode_number}
                    </span>
                    <span className="text-sm">{episode.name}</span>
                  </div>
                </Link>
              </div>
            );
          })
        ) : (
          <div className="text-white text-center col-span-4">
            No episodes available for this season.
          </div>
        )}
      </div>
    </div>
  );
};

export default Episodes;
