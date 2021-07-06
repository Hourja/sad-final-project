import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import sendMessage from '../requests/sendMessage'

const initialValues = {
  fullName: '',
  email: '',
  subject: ''
}

function ContacthtmlForm({ h2, children }) {
  const [errors, setErrors] = useState(null)
  const [messageSent, setMessageSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [values, setValues] = useState(initialValues)

  const handleChange = (event) => setValues({ ...values, [event.target.name]: event.target.value })

  const handleSubmit = async (event) => {
    event.preventDefault()
    setErrors(null)
    if (sending) return

    setSending(true)
    const { success, errors } = await sendMessage(values)
    setSending(false)

    if (!success) {
      setErrors(errors)
      return
    }

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

        {errors && (
          <ul className='__errors'>
            {errors.map((error) => (
              <li>{error}</li>
            ))}
          </ul>
        )}
      </form>
    </div>
  )
}

export default ContacthtmlForm
