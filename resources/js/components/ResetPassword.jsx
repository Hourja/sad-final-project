import { useState } from 'react'
import fetchResetPassword from '../requests/fetchResetPassword'
import Errors from './Errors'

export default function resetPassword() {
  const [sending, setSending] = useState(false)
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState(null)
  const [resetSent, setResetSent] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    setErrors(null)
    if (sending) return
    setSending(true)

    const { success, errors } = await fetchResetPassword(email)
    setSending(false)

    if (!success) {
      setErrors(errors)
      return
    }

    setResetSent(true)
    setEmail('')
    setTimeout(() => setResetSent(false), 3000)
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
        <input
          type='submit'
          value={sending ? 'Sending...' : 'Reset Password'}
          disabled={sending}
          className='login-button'
        />

        {resetSent && <span className='__message'>We have sent you a reset link - please check your email</span>}
      </form>
      <Errors errors={errors} />
    </div>
  )
}
