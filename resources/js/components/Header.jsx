import { Link } from 'react-router-dom'
import { useContext } from 'react'
import LOGO from '../../img/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Cities from './Cities'

import UserContext from '../UserContext'
import Container from '../components/container/Container'
import './header.scss'

function Header() {
  const { loggedIn } = useContext(UserContext)

  return (
    <header className='header'>
      <Container className='__container' fluid>
        <Link to='/'>
          <img src={LOGO} alt='logo' className='App-logo' />
        </Link>
        <nav className='top-menu' role='navigation'>
          <ul className='nav-bar'>
            <li className='home-link'>
              <Link to='/'>
                <FontAwesomeIcon icon='home' /> Home
              </Link>
            </li>
            <li className='cities-link'>
              Cities <FontAwesomeIcon icon='angle-down' size='xs' />
              <ul className='dropdown'>
                <li className='city-dropdown'>
                  <Cities />
                </li>
              </ul>
            </li>
            <li className='about-link'>
              <Link to='/about-us'>About</Link>
            </li>
            <li className='contact-link'>
              <Link to='/contact'>Contact</Link>
            </li>
            {!loggedIn && (
              <li className='register-link'>
                <Link to='/sign-up'>Register</Link>
              </li>
            )}
            {!loggedIn && (
              <li className='login-link'>
                <Link to='/sign-in'>Login</Link>
              </li>
            )}
            {loggedIn && (
              <li className='logout-link'>
                <Link to='/sign-out'>Logout</Link>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
