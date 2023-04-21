import { useState, useEffect, useRef } from "react";

export function useSearch() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstRender = useRef()

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = search === ''
      return
    }
    if (search === "") {
      setError("No puedes buscar una película vacía");
      return;
    }
    if (search.match(/^\d+$/)) {
      setError("No puedes buscar una película con un número");
      return;
    }
    if (search.length < 3) {
      setError("La búsqueda debe tener al menos 3 caracteres");
      return;
    }
    setError(null);
  }, [search])
  return {error, search, setSearch}
}