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
          <a href="https://github.com/Hourja/"><FontAwesomeIcon icon={['fab', 'github']} size='lg' id='social-icon'/></a>
          <a href="https://github.com/amandabcarneiro9"><FontAwesomeIcon icon={['fab', 'github-alt']} size='lg' id='social-icon'/></a>
          <a href="https://github.com/davidhuertabeltran"><FontAwesomeIcon icon={['fab', 'github-square']} size='lg' id='social-icon' /></a>
        </div>
        <p className='credits-footer'>Made with ❤️ by S.A.D</p>
      </Container>
    </footer>
  )
}

export default Footer
