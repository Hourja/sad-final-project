import './loginForm.scss'

import React, { useState, useContext } from 'react'
import { Link, Redirect } from 'react-router-dom'
import UserContext from '../../js/UserContext'

export default function LoginForm({ children }) {
  const { loggedIn, login } = useContext(UserContext)

  if (loggedIn) {
    return <Redirect to='/' />
  }

  const [loginFailed, setLoginFailed] = useState(false)
  const [loading, setLoading] = useState(false)
  const [{ email, password }, setValues] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async (event) => {
    event.preventDefault()

    setLoading(true)
    const worked = await login({ email, password })

    if (!worked) {
      setLoading(false)
      setLoginFailed(true)
      return
    }
  }

  const handleChange = (event) => {
    const allowed_names = ['email', 'password'],
      name = event.target.name,
      value = event.target.value

    if (-1 !== allowed_names.indexOf(name)) {
      setValues((prev_values) => {
        return { ...prev_values, [name]: value }
      })
    }
  }

  return (
    <div className='login-form'>
      {children}
      <h1 className='login-title'>Login</h1>

      <form className='login' action='/login' method='post' onSubmit={handleSubmit}>
        <label htmlFor='email'>
          Email:
          <input className='login-input' type='email' name='email' value={email} onChange={handleChange} />
        </label>

        <label htmlFor='email'>
          Password:
          <input className='login-input' type='password' name='password' value={password} onChange={handleChange} />
        </label>

        <button className='login-button'>{loading ? 'In progress...' : 'Login'}</button>

        {loginFailed && <div className='__error'>Your credentials are invalid</div>}

        <div className='logged'>
          <div className='register-form-login'>
            <p>Don't have an account?</p>
            <Link to='/sign-up'>Register</Link>
          </div>
          <div className='forgot-password-form-login'>
            <p>Problems to login?</p>
            <Link to='/forgot-my-password'>Reset your password</Link>
          </div>
        </div>
      </form>
    </div>
  )
}
