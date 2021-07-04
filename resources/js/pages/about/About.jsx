import './About.scss'
import ContactForm from '../../components/ContactForm'

export default function About() {
  const names = ['Spiros', 'Amanda', 'David']

  return (
    <div className='about-us-page'>
      <div className='__about'>
        <h1>About Us </h1>
        <div className='__developer-list'>{names.map(developer)}</div>
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

function developer(name) {
  return (
    <div className='__developer'>
      <img src={require('../../../img/profile.png').default} alt='' />
      <div className='__info'>
        <h3>{name}</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident accusantium eveniet corporis dolor velit
          non saepe quibusdam officiis, enim, ullam itaque eaque beatae repellat cupiditate autem illum alias
          exercitationem similique.
        </p>
      </div>
    </div>
  )
}
