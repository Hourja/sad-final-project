import { Link } from 'react-router-dom'
import { useContext } from 'react'
import LOGO from '../../img/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import UserContext from '../UserContext'
import Container from '../components/container/Container'
import './header.scss'

function Header() {
  const { loggedIn } = useContext(UserContext)

  return (
    <header className='header'>
      <Container className='__container' fluid>
        <Link to='/'>
          <img src={LOGO} alt='logo' />
        </Link>
        <nav className='top-menu'>
          <Link to='/'>
            <FontAwesomeIcon icon='home' /> Home
          </Link>
          {!loggedIn && <Link to='/sign-up'>Register</Link>}
          {!loggedIn && <Link to='/sign-in'>Login</Link>}
          <Link to='/about-us'>About</Link>
          <Link to='/contact'>Contact</Link>
          {loggedIn && <Link to='/sign-out'>Logout</Link>}
        </nav>
      </Container>
    </header>
  )
}

export default Header
