import { API_BASE_URL } from "../constants";

export const searchMovies = async ({ search }) => {
  try {
  const response = await fetch(`${API_BASE_URL}${search}`)
  const json = await response.json()
  const movies = json.Search
  return movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
    description: movie.Plot,
    rating: movie.imdbRating,
  }));
  } catch (e) {
    throw new Error("Error searching movies")
  }
}