import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
function App() {
  const { movies } = useMovies()
  const { error, search, setSearch} = useSearch()

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form" onSubmit={handleSubmit} onChange={handleChange}>
          <label name=""></label>
          <input placeholder="Avengers, Star Wars..." name="search" value={search} />
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
        {/* Peliculas */}
        <Movies movies={movies} />
        <div>
          {error}
        </div>
      </main>
    </div>
  );
}

export default App
