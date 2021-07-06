import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import sendMessage from '../requests/sendMessage'

const initialValues = {
  fullName: '',
  email: '',
  subject: ''
}

function ContacthtmlForm({ h2, children }) {
  const [messageSent, setMessageSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [values, setValues] = useState(initialValues)

  const handleChange = (event) => setValues({ ...values, [event.target.name]: event.target.value })

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (sending) return

    //validação

    setSending(true)
    await sendMessage(values)

    setSending(false)
    setValues(initialValues)

    setMessageSent(true)
    setTimeout(() => setMessageSent(false), 3000)
  }

  return (
    <div className='contact-form'>
      {h2 && <h2>{h2}</h2>}
      {children}
      <form onSubmit={handleSubmit}>
        <label htmlFor='fullName'>Full name</label>
        <input
          type='text'
          id='fullName'
          name='fullName'
          placeholder='Your name..'
          onChange={handleChange}
          value={values.fullName}
        />

        <label htmlFor='email'>Email</label>
        <input
          type='text'
          id='email'
          name='email'
          placeholder='Your email...'
          onChange={handleChange}
          value={values.email}
        />

        <label htmlFor='subject'>Subject</label>
        <textarea
          id='subject'
          name='subject'
          placeholder='Write something..'
          onChange={handleChange}
          value={values.subject}
        />

        <input type='submit' value={sending ? 'Sending...' : 'Submit'} disabled={sending} className='submit-button' />
        {messageSent && <span className='__message'>Thanks for you message!</span>}
      </form>
    </div>
  )
}

export default ContacthtmlForm
