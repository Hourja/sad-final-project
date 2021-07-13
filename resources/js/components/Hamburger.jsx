import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import UserContext from '../UserContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes as Close } from '@fortawesome/free-solid-svg-icons'
import { faBars as Open } from '@fortawesome/free-solid-svg-icons'
import Switch from './dark mode/Switch'
import Gravatar from '../pages/profile/Gravatar'

function Hamburger() {
  const { loggedIn } = useContext(UserContext)
  const [hamburgerMenu, showHamburger] = useState(false)
  const [open, setOpen] = useState(Open)

  const toggleMenu = () => {
    hamburgerMenu ? showHamburger(false) : showHamburger(true)
    if (open == Open) {
      setOpen(Close)
    } else setOpen(Open)
  }

  return (
    <div className='hamburger-container'>
      <div className='hamburger'>
        <FontAwesomeIcon onClick={toggleMenu} icon={open} size='2x' />
      </div>
      <nav className={'mobile-menu' + (hamburgerMenu ? ' visible-hamburger' : '')}>
        <ul className='nav-bar' onClick={toggleMenu}>
          <li className='home-link'>
            <Link to='/'>
              <FontAwesomeIcon icon='home' /> Home
            </Link>
          </li>
          <li className='cities-link-mobile'>
            Cities
            <ul className='dropdown-mobile'>
              <li className='city-dropdown-mobile'>
                <Link to='/city/santorini' className='city-list-dropdown-mobile'>
                  Santorini
                </Link>
              </li>
              <li className='city-dropdown-mobile'>
                <Link to='/city/rio-de-janeiro' className='city-list-dropdown-mobile'>
                  Rio de Janeiro
                </Link>
              </li>
              <li className='city-dropdown-mobile'>
                <Link to='/city/warsaw' className='city-list-dropdown-mobile'>
                  Warsaw
                </Link>
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
          {loggedIn && (
            <li className='profile-link'>
              <Link to='/profile'>
                <Gravatar size='45' />
              </Link>
            </li>
          )}
          <Switch />
        </ul>
      </nav>
    </div>
  )
}

export default Hamburger
