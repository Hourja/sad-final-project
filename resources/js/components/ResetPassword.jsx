import { useState } from 'react'
import fetchResetPassword from '../requests/fetchResetPassword'

export default function resetPassword() {
  //const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    //setLoading(true)
    await fetchResetPassword(email)
    //setLoading(false)
  }
  const handleChange = (event) => {
    setEmail(event.target.value)
  }

  return (
    <div className='login-form'>
      <form className='login' action='/login' method='post' onSubmit={handleSubmit}>
        <label htmlFor='email'>
          Email:
          <input className='login-input' type='email' value={email} name='email' onChange={handleChange} />
        </label>
        <button className='login-button'>Send</button>
      </form>
    </div>
  )
}
