import results from "../mocks/results.json"

export function useMovies (){
  const movies = results.Search
  const mappedData = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
    description: movie.Plot,
    rating: movie.imdbRating,
  }));

  return {movies: mappedData}
}
