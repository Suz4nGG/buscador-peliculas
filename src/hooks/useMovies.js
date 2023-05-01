import { useState, useRef, useMemo, useCallback } from "react";
// import withResults from "../mocks/results.json"
// import withoutResults from "../mocks/no-results.json"
// import { API_BASE_URL } from "../constants";
import { searchMovies } from "../services/movies";


export function useMovies({ search, order }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)

  const getMovies = useCallback(async ({search}) => {
    if(search === previousSearch.current) return
    try {
      setLoading(true)
      setError(null)
      previousSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (e) {
      setError(e.message)
    } finally {
      // ! Finally entra tanto pase por el try y por el catch
      setLoading(false)
    }
  }, [])
  // ! Ejecutar así hace que la lógica vuelva a ejecutarse cuando este hook sea llamado
  // const orderByTitle = order ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies

  const sortedMovies = useMemo(() => {
    return order ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies;
  }, [order, movies])


  return { movies: sortedMovies, loading, error, getMovies };
}
