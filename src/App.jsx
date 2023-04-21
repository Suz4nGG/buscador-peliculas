import './App.css'

function App() {

  return (
    <div className='page'>
      <header>
      <h1>Buscador de peliculas</h1>
      <form className='form'>
        <label name=""></label>
          <input placeholder='Avengers, Star Wars...' />
          <button type='submit'>Buscar</button>
      </form>
      </header>
      <main>
        {/* Peliculas */}
      </main>
    </div>
  )
}

export default App
