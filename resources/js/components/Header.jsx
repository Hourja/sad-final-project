import { Link } from 'react-router-dom'
import { useContext } from 'react'
import LOGO from '../../img/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import UserContext from '../UserContext'

function Header() {
  const { loggedIn, user } = useContext(UserContext)
  const [name] = user ? user.name.split(' ') : []
  return (
    <header>
      <Link to='/'>
        <img src={LOGO} alt='logo' />
      </Link>
      <nav className='top-menu'>
        {loggedIn && <>Welcome {name}!</>}
        <Link to='/'>
          <FontAwesomeIcon icon='home' /> Home
        </Link>
        {!loggedIn && <Link to='/sign-up'>Register</Link>}
        {!loggedIn && <Link to='/sign-in'>Login</Link>}
        <Link to='/about-us'>About</Link>
        <Link to='/contact'>Contact</Link>
        {loggedIn && <Link to='/sign-out'>Logout</Link>}
      </nav>
    </header>
  )
}

export default Header
