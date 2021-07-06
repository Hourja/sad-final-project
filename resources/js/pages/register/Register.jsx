import './Register.scss'

import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import UserContext from '../../UserContext'

export default function Register() {
  const context = useContext(UserContext)
  const [{ email, name, password, password_confirmation }, setValues] = useState({
    email: '',
    name: '',
    password: '',
    password_confirmation: ''
  })

  const handleSubmit = async (event) => {
    event.preventDefault()

    // client validation
    // set as loading

    context.register({ email, name, password, password_confirmation })
    //if the backend fails show the errors
    // if the backend success show a message and redirect
    // remove the loading
    // DO SOMETHING AFTER REGISTRATION
  }

  const handleChange = (event) => {
    const allowed_names = ['name', 'email', 'password', 'password_confirmation'],
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
      <h1 className='register-title'>Registration</h1>

      <form className='register' action='/register' method='post' onSubmit={handleSubmit}>
        <label htmlFor='name'>
          Name:
          <input className='register-input' type='text' name='name' value={name} onChange={handleChange} />
        </label>

        <label htmlFor='email'>
          Email:
          <input className='register-input' type='email' name='email' value={email} onChange={handleChange} />
        </label>

        <label htmlFor='password'>
          Password:
          <input className='register-input' type='password' name='password' value={password} onChange={handleChange} />
        </label>

        <label htmlFor='password_confirmation'>
          Confirm Passowrd
          <input
            className='register-input'
            type='password'
            name='password_confirmation'
            value={password_confirmation}
            onChange={handleChange}
          />
        </label>

        <button className='register-button'>Register</button>

        <div className='registered'>
          Already have an account?<Link to='/sign-in'>Login</Link>
        </div>
      </form>
    </>
  )
}
