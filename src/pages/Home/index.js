import api from '../../services/api'
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './home.css'

function Home ()
{
  const [movies, setMovies] = useState ([])
  useEffect (() =>
  {
    async function loadMovies()
    {
      const response = await api.get ()
      setMovies (response.data)
    }
    loadMovies ()
  }, [])

  return (
    <div className='container'>
      <div className='movie-list'>
        {movies.map ((movie) => 
        {
          return (
            <article key={movie.id}>
              <strong>{movie.nome}</strong>
              <img src={movie.foto} alt={movie.nome}></img>
              <Link to={`/movie/${movie.id}`}>View</Link>
            </article>
          )
        })}
      </div>
    </div>
  )
}
export default Home