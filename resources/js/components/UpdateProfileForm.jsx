import './updateProfileForm.scss'

import React, { useState, useContext } from 'react'
import UserContext from '../UserContext'
import { updateProfile } from '../requests/userRequests'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Redirect, useRouteMatch } from 'react-router'

export default function UpdateProfileForm({ name, email, setValues }) {
  const { token } = useContext(UserContext)
  const { path } = useRouteMatch()

  const [loginFailed, setLoginFailed] = useState(false)
  const [loading, setLoading] = useState(false)
  const [enableFields, setEnableFields] = useState(true)

  const handleSubmit = async (event) => {
    event.preventDefault()

    setLoading(true)
    const worked = await updateProfile({ name, email }, token)

    if (!worked) {
      setLoading(false)
      setLoginFailed(true)
      return
    }

    return <Redirect to='/' />
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

  const enableForm = () => {
    setEnableFields(!enableFields)
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

        <button className='login-button'>{loading ? 'In progress...' : 'Update'}</button>
      </form>
    </div>
  )
}
