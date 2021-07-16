import './Register.scss'

import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import UserContext from '../../UserContext'
import Errors from '../../components/Errors'

export default function Register() {
  const context = useContext(UserContext)

  const [errors, setErrors] = useState(null)
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

    const { success, errors } = await context.register({ email, name, password, password_confirmation })

    if (!success) {
      return setErrors(errors)
    }

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
    <div className='register-page'>
      <h1 className='register-title'>Registration</h1>

      <form className='register' action='' method='post' onSubmit={handleSubmit}>
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
          <div className='password-requirements'>
            <p>- At least 8 characters</p>
            <p>- At least one uppercase and lowercase</p>
            <p>- At least one number</p>
            <p>- At least one symbol/special character</p>
          </div>
        </label>

        <label htmlFor='password_confirmation'>
          Confirm Password:
          <input
            className='register-input'
            type='password'
            name='password_confirmation'
            value={password_confirmation}
            onChange={handleChange}
          />
        </label>

        <button className='register-button'>Register</button>
        <Errors errors={errors} />

        <div className='registered'>
          Already have an account?<Link to='/sign-in'>Login</Link>
        </div>
      </form>
    </div>
  )
}
