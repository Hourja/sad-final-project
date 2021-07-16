import { useEffect, useState } from 'react'
import './About.scss'
import ContactForm from '../../components/ContactForm'
import fetchProfiles from '../../requests/fetchProfiles'
window.fetchProfiles = fetchProfiles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function About() {
  const [profiles, setProfiles] = useState(null)

  useEffect(loadProfiles, [])

  async function loadProfiles() {
    const loadedProfiles = await fetchProfiles()
    setProfiles(loadedProfiles)
  }

  if (!profiles) {
    return 'Loading...'
  }

  return (
    <div className='about-us-page'>
      <div className='__about'>
        <h1>About Us </h1>
        <div className='__developer-list'>{profiles.map(developer)}</div>
      </div>

      <div className='__getInTouch'>
        <ContactForm>
          <h2>Get In Touch</h2>
          <div className='__text'>
            <p>
              If you would like to find out more about how we can help you, please contact-us trough the form bellow.{' '}
            </p>
            <p>
              We welcome your comments and suggestions about this website and/or any other issues that you wish to
              raise.
            </p>
          </div>
        </ContactForm>
      </div>
    </div>
  )
}

function developer(profile) {
  return (
    <div className='__developer' key={profile.id}>
      <img src={`/images/${profile.photo_url}`} alt='' />
      <div className='__info'>
        <h3 className='name'>
          {profile.nickname}{' '}
          <a href={profile.github}>
            <FontAwesomeIcon icon={['fab', 'github']} size='1x' id='social-icon' />
          </a>
        </h3>
        <p className='description'>{profile.description}</p>
      </div>
    </div>
  )
}
