import './updateProfileForm.scss'

import React, { useState, useContext } from 'react'
import UserContext from '../UserContext'
import { updateProfile } from '../requests/userRequests'
import Errors from './Errors'
export default function UpdateProfileForm({ name, email, setValues }) {
  const { token } = useContext(UserContext)
  const [errors, setErrors] = useState(null)
  const [reseting, setReseting] = useState(false)
  const [resetSent, setResetSent] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    setErrors(null)
    if (reseting) return
    setReseting(true)

    const { success, errors } = await updateProfile({ name, email }, token)
    setReseting(false)

    if (!success) {
      setErrors(errors)
      return
    }

    setResetSent(true)

    setTimeout(() => setResetSent(false), 3000)
  }

  const handleChange = (event) => {
    const allowed_names = ['name', 'email'],
      name = event.target.name,
      value = event.target.value

    if (-1 !== allowed_names.indexOf(name)) {
      setValues((prev_values) => {
        return { ...prev_values, [name]: value }
      })
    }
  }

  return (
    <div className='update-profile-form'>
      <form className='login' action='' method='post' onSubmit={handleSubmit}>
        <label htmlFor='email'>
          Name:
          <input className='login-input' type='text' name='name' value={name} onChange={handleChange} />
        </label>
        <label htmlFor='email'>
          E-Mail:
          <input className='login-input' type='email' name='email' value={email} onChange={handleChange} />
        </label>

        <input
          type='submit'
          value={reseting ? 'Updating...' : 'Update Profile'}
          disabled={reseting}
          className='login-button'
        />
      </form>
      {resetSent && <span className='__message'>Your profile updated successfully</span>}

      <Errors errors={errors} />
    </div>
  )
}
