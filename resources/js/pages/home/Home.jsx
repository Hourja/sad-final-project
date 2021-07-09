import { useContext } from 'react'

import UserContext from '../../UserContext'

import Cities from '../../components/Cities'
import Container from '../../components/container/Container'
import Testimonials from '../../components/Testimonials'
import ContactForm from '../../components/ContactForm'
import './Home.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Homepage() {
  const { user } = useContext(UserContext)
  const [name] = user ? user.name.split(' ') : ['Traveller']
  return (
    <div className='home'>
      <Container className='__container-fluid' fluid>
        <div className='__welcome '>
          <div className='__text'>
            <h1>
              Welcome <strong className='name'>{name}</strong> <FontAwesomeIcon icon='globe-americas' />
            </h1>
            <h2>
              Discover the world & Learn a new language by selecting a <strong className='strong'>city</strong>.
            </h2>
          </div>
        </div>
        <div className='__cities'>
          <Cities />
        </div>
      </Container>
      <Container></Container>
    </div>
  )
}

export default Homepage
