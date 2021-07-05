import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function ContacthtmlForm({ h2, children }) {
  return (
    <div className='contact-form'>
      {h2 && <h2>{h2}</h2>}
      {children}
      <form>
        <label htmlFor='fname'>Full name</label>
        <input type='text' id='fname' name='firstname' placeholder='Your name..' />

        <label htmlFor='lname'>Email</label>
        <input type='text' id='lname' name='lastname' placeholder='Your email...' />

        <label htmlFor='subject'>Subject</label>
        <textarea id='subject' name='subject' placeholder='Write something..'></textarea>

        <input type='submit' value='Submit' className='submit-button' />
      </form>
    </div>
  )
}

export default ContacthtmlForm
