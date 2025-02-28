const IMGPATH = "https://image.tmdb.org/t/p/w1280/";
const APIKEY = "04c35731a5ee918f014970082a0088b1";
const APIURL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${APIKEY}&page=1`;
const searchMovieUrl = `https://api.themoviedb.org/3/search/movie?&api_key=${APIKEY}&query=`;

export async function getPopularMovies() {
  const response = await fetch(APIURL);
  const data = await response.json();
  const movies = data.results;
  return movies;
}

export async function searchMovies(searchQuery) {
  const response = await fetch(
    `https://express-api-two-taupe.vercel.app/api/v1/movies/search?query=${searchQuery}`
  );
  const data = await response.json();
  return data;
}

export async function getNowPlaying() {
  const response = await fetch(
    `https://express-api-two-taupe.vercel.app/api/v1/movies/popular`
  );
  const data = await response.json();
  return data;
}

export async function getSelectedMovieDetails(selectedMovieId) {
  const response = await fetch(
    `https://express-api-two-taupe.vercel.app/api/v1/movies/${selectedMovieId}`
  );
  const data = await response.json();
  return data;
}
