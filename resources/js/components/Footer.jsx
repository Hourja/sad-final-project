import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import UserContext from '../UserContext'
import Container from '../components/container/Container'
import './footer.scss'

function Footer() {
  const { loggedIn, isAdmin } = useContext(UserContext)
  return (
    <footer className='footer'>
      <Container className='__container'>
        <nav className='footer-menu'>
          <Link to='/'>Home</Link>
          {!loggedIn && <Link to='/sign-up'>Register</Link>}
          {!loggedIn && <Link to='/sign-in'>Login</Link>}
          {loggedIn && isAdmin && <Link to='/admin'>Admin</Link>}
          <Link to='/about-us'>About</Link>
          <Link to='/contact'>Contact</Link>
        </nav>
        <div className='social-footer'>
          <FontAwesomeIcon icon={['fab', 'facebook']} size='lg' id='social-icon'/>
          <FontAwesomeIcon icon={['fab', 'instagram']} size='lg' id='social-icon'/>
          <FontAwesomeIcon icon={['fab', 'twitter']} size='lg' id='social-icon'/>
        </div>
        <p className='credits-footer'>Made with ❤️ by S.A.D</p>
      </Container>
    </footer>
  )
}

export default Footer
