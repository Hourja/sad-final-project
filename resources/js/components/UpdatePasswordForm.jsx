import './updatePasswordForm.scss'

import React, { useState, useContext } from 'react'
import { Link, Redirect } from 'react-router-dom'
import UserContext from '../UserContext'
import { updatePassword } from '../requests/userRequests'

export default function UpdatePasswordForm() {
  const { loggedIn, login, token } = useContext(UserContext)

  const [loginFailed, setLoginFailed] = useState(false)
  const [loading, setLoading] = useState(false)
  const [{ current_password, password, password_confirmation }, setValues] = useState({
    current_password: '',
    password: '',
    password_confirmation: ''
  })

  const handleSubmit = async (event) => {
    event.preventDefault()

    setLoading(true)
    const worked = await updatePassword({ current_password, password, password_confirmation }, token)

    if (!worked) {
      setLoading(false)
      setLoginFailed(true)
      return
    }
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

        <button className='login-button'>{loading ? 'In progress...' : 'Update Password'}</button>
      </form>
    </div>
  )
}
