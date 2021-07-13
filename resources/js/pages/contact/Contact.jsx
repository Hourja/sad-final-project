import ContactForm from '../../components/ContactForm'
function Contact() {
  return (
    <>
      <ContactForm
        h2={'Contact us'}
        children={
          <div className='contact__text'>
            <p>
              If you would like to find out more about how we can help you, please contact-us trough the form bellow.
            </p>
            <p>
              We welcome your comments and suggestions about this website and/or any other issues that you wish to
              raise.
            </p>
          </div>
        }
      />
    </>
  )
}

export default Contact
