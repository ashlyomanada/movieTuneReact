export async function searchMovies(searchQuery) {
  const response = await fetch(
    `https://express-api-two-taupe.vercel.app/api/v1/movies/search?query=${searchQuery}`
  );
  const data = await response.json();
  return data;
}

export async function getNowPlaying() {
  const response = await fetch(
    `https://express-api-two-taupe.vercel.app/api/v1/movies/now_playing`
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

export async function getPopularMovies() {
  const response = await fetch(
    `https://express-api-two-taupe.vercel.app/api/v1/movies/popular`
  );
  const data = await response.json();
  return data;
}

export async function getTopRatedMovies() {
  const response = await fetch(
    `https://express-api-two-taupe.vercel.app/api/v1/movies/top-rated`
  );
  const data = await response.json();
  return data;
}

export async function getGenre() {
  const response = await fetch(
    `https://express-api-two-taupe.vercel.app/api/v1/movies/genres`
  );
  const data = await response.json();
  return data;
}

export async function getGenreById(id) {
  const response = await fetch(
    `https://express-api-two-taupe.vercel.app/api/v1/movies/genres/${id}`
  );
  const data = await response.json();
  return data;
}
