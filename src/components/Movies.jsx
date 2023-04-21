
function ListOfMovies ({movies}) {
return (
  <ul>
    {movies.map((movie) => (
      <li key={movie.id}>
        <h3>{movie.title}</h3>
        <p>{movie.year}</p>
        <img src={movie.poster} alt={movie.title} />
      </li>
    ))}
  </ul>
);
}

function HasNoMovies () {
  return <p>No se encontraron peliculas</p>
}

export function Movies({movies}) {
  const hasMovies = movies.length > 0;
  return (
    <div>{hasMovies ? <ListOfMovies movies={movies} /> : <HasNoMovies />}</div>
  );
}
