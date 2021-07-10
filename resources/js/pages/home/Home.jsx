import { useContext } from 'react'

import UserContext from '../../UserContext'

import Cities from '../../components/Cities'
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
      </div>

      <div className='try'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ab cupiditate consectetur consequatur
          similique optio fuga ducimus aut quibusdam obcaecati! Expedita quidem totam neque, sint optio ullam eveniet
          excepturi vero.
        </p>
      </div>
      <Container>
        <CitiesBlock />
      </Container>
    </>
  )
}

export default Homepage
