import { useContext } from 'react'

import UserContext from '../../UserContext'

import Cities from '../../components/Cities'
import Testimonials from '../../components/Testimonials'
import ContactForm from '../../components/ContactForm'
import './Home.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BackTopButton from '../../components/BackTopButton'

function Homepage() {
  const { user } = useContext(UserContext)
  const [name] = user ? user.name.split(' ') : ['Traveller']

  return (
    <div className='homepage'>
      <BackTopButton />
      <div className='__welcome container'>
        <h1>
          Welcome {name} <FontAwesomeIcon icon='globe-americas' />
        </h1>
        <h2>
          Discover the world & Learn a new language by selecting a <strong>city</strong>.
        </h2>
      </div>
      {/* <div className='cities-wrapper'> */}
      <Cities />
      {/* </div> */}

      <div className='explore'>
        <h2>Explore the city and learn a new language</h2>
        <p className='explore-description'>
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat
          facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
        </p>
        <div className='features'>
          <div className='feature'>
            <h3>
              <FontAwesomeIcon icon='plane' size='lg' /> Feature 1
            </h3>
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor</p>
          </div>
          <div className='feature'>
            <h3>
              <FontAwesomeIcon icon={['far', 'laugh-beam']} size='lg' /> Feature 2
            </h3>
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor</p>
          </div>
          <div className='feature'>
            <h3>
              <FontAwesomeIcon icon='map-marked-alt' size='lg' /> Feature 3
            </h3>
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor</p>
          </div>
        </div>
      </div>

      <Testimonials />

      <ContactForm
        h2={
          <>
            <FontAwesomeIcon icon={['far', 'envelope']} size='xs' /> Contact us
          </>
        }
      />
    </div>
  )
}

export default Homepage
