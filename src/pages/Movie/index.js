import './movie.css'
import {useEffect, useState} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import api from '../../services/api'
import {toast} from 'react-toastify'

function Movie ()
{
  const {id} = useParams ()
  const history = useHistory ()
  const [movie, setMovie] = useState ([])
  const [movies, setMovies] = useState ([])
  const [loading, setLoading] = useState (true)

  async function loadMovie ()
  {
    const response = await api.get (`${id}`)
    setMovies (JSON.parse (localStorage.getItem ('movies')) || [])

    if (response.data.length !== 0)
    {
      setMovie (response.data)
      setLoading (false)
    }
    else
    {
      history.replace ('/')
      return
    }
  }

  useEffect (() =>
  {
    loadMovie ()
  }, [id, history, movies])

  function saveMovie ()
  {
    const movieStorage = localStorage.getItem ('movies')
    let savedMovies = JSON.parse (movieStorage) || []
    const hasMovie = savedMovies.find (m => m.id === movie.id)

    if (!hasMovie)
    {
      savedMovies.push (movie)
      localStorage.setItem ('movies', JSON.stringify (savedMovies))
      toast.success ('Saved to favorites.')
    }
    else
    {
      savedMovies.splice (savedMovies.indexOf (movie), 1)
      localStorage.setItem ('movies', JSON.stringify (savedMovies))
      toast.error ('Removed from favorites.')
    }
  }

  if (loading)
    return (
      <div className='loading'>
        <a>Fetching movie data...</a>
      </div>
    )
  else
  return (
    <div className='movie-info'>
      <h1>{movie.nome}</h1>
      <img src={movie.foto} alt={movie.nome} />
      <h3>Sinopse</h3>
      {movie.sinopse}
      <div className='button'>
        <button className='b1' onClick={saveMovie}>{movies.find (m => m.id === movie.id) ? 'Remove' : 'Save'}</button>
        <button className='b2'>
          <a target='blank' href={`https://youtube.com/results?search_query=${movie.nome} trailer`}>Trailer</a>
        </button>
      </div>
    </div>
  )
}
export default Movie