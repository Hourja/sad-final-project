import './Login.scss'

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Login(props) {
  const [{ email, password }, setValues] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async (event) => {
    event.preventDefault()

    let request_data = { email, password }
    const response = await fetch('/api/token', {
      method: 'POST',
      body: JSON.stringify(request_data),
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
      }
    })
    const response_data = await response.json()
    localStorage.setItem('my_token', response_data.token)
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
    <>
      <h1 className='register-title'>Log in</h1>

      <form className='login' action='/login' method='post' onSubmit={handleSubmit}>
        <label htmlFor='email'>
          Email:
          <input className='login-input' type='email' name='email' value={email} onChange={handleChange} />
        </label>

        <label htmlFor='email'>
          Password:
          <input className='login-input' type='password' name='password' value={password} onChange={handleChange} />
        </label>

        <button className='login-button'>Login</button>

        <div className='logged'>
          Don't have an account? <Link to='/sign-up'>Register</Link>
        </div>
      </form>
    </>
  )
}
