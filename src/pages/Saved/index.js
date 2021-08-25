import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {toast} from 'react-toastify'
import './saved.css'

function Saved ()
{
  const [movies, setMovies] = useState ([])

  useEffect (() =>
  {
    const movieList = localStorage.getItem ('movies')
    setMovies (JSON.parse (movieList) || [])
  }, [movies])

  function removeMovie (id)
  {
    let savedMovies = movies
    savedMovies.splice (savedMovies.indexOf (movies.find (m => m.id === id)), 1)
    setMovies (savedMovies)
    localStorage.setItem ('movies', JSON.stringify (savedMovies))
    toast.error ('Removed from favorites.')
  }

  return (
    <div id='saved-movies'>
      <h1>Saved Movies</h1>

      {movies.length === 0 && <span>No movies saved yet.</span>}

      <ul>
        {movies.map (movie => 
          {
            return (
              <li key={movie.id}>
                <span>{movie.nome}</span>
                <div>
                  <Link to={`/movie/${movie.id}`}>Details</Link>
                  <button onClick={() => removeMovie (movie.id)}>Remove</button>
                </div>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default Saved