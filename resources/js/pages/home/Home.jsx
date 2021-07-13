import { useContext } from 'react'
import { Link } from 'react-router-dom'

import UserContext from '../../UserContext'

import Cities from '../../components/Cities'
import Testimonials from '../../components/Testimonials'
import Container from '../../components/container/Container'
import CitiesBlock from '../../components/CitiesBlock'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BackTopButton from '../../components/BackTopButton'

import './Home.scss'

function Homepage() {
  const { user } = useContext(UserContext)
  const [name] = user ? user.name.split(' ') : ['Traveller']

  return (
    <>
      <div className='home'>
        {/* <BackTopButton /> */}
        <Container className='__container-fluid' fluid>
          <div className='__welcome '>
            <div className='__text'>
              <h1>
                Welcome <strong className='name'>{name}</strong>{' '}
                <span className='icon'>
                  <FontAwesomeIcon icon='globe-americas' />
                </span>
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
      </div>

      <div className='try'>
        <h2>Sign up for free</h2>
        <span>
          Want to save your favorites phrases to save time? Sign up for free and be in touch with our features
        </span>

        <Link to='/sign-up' className='__sign-up'>
          <p className='__title'>Register</p>
        </Link>
      </div>
      <Container>
        <CitiesBlock />
      </Container>

      <Testimonials />
    </>
  )
}

export default Homepage
