import './header.css'
import {Link} from 'react-router-dom'

export default function Header ()
{
  return (
    <header>
      <Link className='logo' to='/'>MOVIETUDE</Link>
      <Link className='saved' to='/saved'>Saved</Link>

    </header>
  )
}