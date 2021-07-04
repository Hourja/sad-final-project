import { Link } from 'react-router-dom'
import LOGO from '../../img/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header() {
  return (
    <header>
      <Link to='/'>
        <img src={LOGO} alt='logo' />
      </Link>
      <nav className='top-menu'>
        <Link to='/'>
          <FontAwesomeIcon icon='home' /> Home
        </Link>
        <Link to='/sign-up'>Register</Link>
        <Link to='/sign-in'>Login</Link>
        <Link to='/about-us'>About</Link>
        <a href=''>Contact</a>
      </nav>
    </header>
  )
}

export default Header
