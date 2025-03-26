const APIKEY = "04c35731a5ee918f014970082a0088b1";
const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280/";

// export const searchTMDB = async (query) => {
//   const SEARCHAPI = `https://api.themoviedb.org/3/search/movie?&api_key=${APIKEY}&query=${query}`;
//   const response = await fetch(SEARCHAPI);
//   const data = await response.json();
//   return data;
// };

export const getEpisodes = async (tv_id, season_number) => {
  const url = `https://api.themoviedb.org/3/tv/${tv_id}/season/${season_number}?api_key=${APIKEY}&language=en-US`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
