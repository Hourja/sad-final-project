import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import UserContext from '../UserContext'

function Footer() {
  const { loggedIn } = useContext(UserContext)
  return (
    <footer>
      <nav className='footer-menu'>
        <Link to='/'>Home</Link>
        {!loggedIn && <Link to='/sign-up'>Register</Link>}
        {!loggedIn && <Link to='/sign-in'>Login</Link>}
        <Link to='/about-us'>About</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
      <div className='social-footer'>
        <FontAwesomeIcon icon={['fab', 'facebook']} size='lg' />
        <FontAwesomeIcon icon={['fab', 'instagram']} size='lg' />
        <FontAwesomeIcon icon={['fab', 'twitter']} size='lg' />
      </div>
      <p className='credits-footer'>Made with ❤️ by S.A.D</p>
    </footer>
  )
}

export default Footer
