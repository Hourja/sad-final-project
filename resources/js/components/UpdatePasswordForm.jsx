import './updatePasswordForm.scss'

import React, { useState, useContext } from 'react'
import UserContext from '../UserContext'
import { updatePassword } from '../requests/userRequests'
import Errors from './Errors'
export default function UpdatePasswordForm() {
  const { token } = useContext(UserContext)
  const [reseting, setReseting] = useState(false)
  const [errors, setErrors] = useState(null)
  const [resetSent, setResetSent] = useState(false)

  const [{ current_password, password, password_confirmation }, setValues] = useState({
    current_password: '',
    password: '',
    password_confirmation: ''
  })

  const handleSubmit = async (event) => {
    event.preventDefault()

    setErrors(null)
    if (reseting) return
    setReseting(true)

    const { success, errors } = await updatePassword({ current_password, password, password_confirmation }, token)
    setReseting(false)

    if (!success) {
      setErrors(errors)
      return
    }

    setResetSent(true)

    setTimeout(() => setResetSent(false), 3000)
  }

  const handleChange = (event) => {
    const allowed_names = ['current_password', 'password', 'password_confirmation'],
      name = event.target.name,
      value = event.target.value

    if (-1 !== allowed_names.indexOf(name)) {
      setValues((prev_values) => {
        return { ...prev_values, [name]: value }
      })
    }
  }

  return (
    <div className='update-password-form'>
      <form className='login' action='/login' method='post' onSubmit={handleSubmit}>
        <label htmlFor='email'>
          Current Password:
          <input
            className='login-input'
            type='password'
            name='current_password'
            value={current_password}
            onChange={handleChange}
          />
        </label>
        <label htmlFor='email'>
          New Password:
          <input className='login-input' type='password' name='password' value={password} onChange={handleChange} />
          <div className='password-requirements'>
            <p>- At least 8 characters</p>
            <p>- At least one uppercase and lowercase</p>
            <p>- At least one number</p>
            <p>- At least one symbol/special character</p>
          </div>
        </label>
        <label htmlFor='email'>
          Confirm New Password:
          <input
            className='login-input'
            type='password'
            name='password_confirmation'
            value={password_confirmation}
            onChange={handleChange}
          />
        </label>
        <input
          type='submit'
          value={reseting ? 'Updating...' : 'Update Password'}
          disabled={reseting}
          className='login-button'
        />{' '}
        {resetSent && <span className='__message'>Successfully saved your new password</span>}
      </form>
      <Errors errors={errors} />
    </div>
  )
}
