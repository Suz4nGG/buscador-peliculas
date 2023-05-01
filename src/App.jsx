import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import { useState, useCallback } from 'react'
import debounce from 'just-debounce-it'

function App() {
  const { error, search, setSearch } = useSearch()
  console.log(search)
  const [order, setOrder] = useState(false)
  const { movies, getMovies } = useMovies({ search, order });

  // ! Debounce
  const debounceMovies = useCallback(
    debounce((search) => {
      getMovies({ search });
    }, 300), [getMovies]
  );

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({search})
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    debounceMovies(newSearch);
  }

  const handleOrder = () => {
    setOrder(!order)
  }
  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <div className="">
          <label htmlFor="order">Ordena por Titulo</label>
          <input name="order" type="checkbox" onClick={handleOrder} />
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            placeholder="Avengers, Star Wars..."
            name="search"
            value={search}
            onChange={handleChange}
          />
          <button type="submit">Buscar</button>
        </form>
        <div>{error}</div>
      </header>
      <main>
        {/* Peliculas */}
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App
