import { useEffect, useState } from 'react'
import './About.scss'
import ContactForm from '../../components/ContactForm'
import fetchProfiles from '../../requests/fetchProfiles'
window.fetchProfiles = fetchProfiles
export default function About() {
  const [profiles, setProfiles] = useState(null)

  useEffect(loadProfiles, [])

  async function loadProfiles() {
    const loadedProfiles = await fetchProfiles()
    setProfiles(loadedProfiles)
  }
  console.log(profiles)

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
            If you would like to find out more about how we can help you, please contact-us trough the form bellow. We
            welcome your comments and suggestions about this website and/or any other issues that you wish to raise.
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
        <h3>{profile.nickname}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nostrum quasi, voluptate esse officia quam ullam
          doloremque similique quibusdam omnis odio hic id magni soluta necessitatibus quas iure! Ipsa, aut!
        </p>
      </div>
    </div>
  )
}

// {
//   profile.description
// }
