import './recoverPassword.scss'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import fetchRecoverPassword from '../../requests/fetchRecoverPassword'

export default function RecoverPassword() {
  const [{ password, password_confirmation }, setValues] = useState({
    password: '',
    password_confirmation: ''
  })
  const location = useLocation()
  const params = new URLSearchParams(location.search)

  const handleSubmit = async (event) => {
    event.preventDefault()

    await fetchRecoverPassword({
      password,
      password_confirmation,
      token: params.get('token'),
      email: params.get('email')
    })
  }

  const handleChangePassword = (event) => {
    setValues({ password: event.target.value, password_confirmation })
  }

  const handleChangePasswordConfirmation = (event) => {
    setValues({ password, password_confirmation: event.target.value })
  }

  return (
    <>
      <div className='login-page'>
        <h1>Recover you password</h1>
        <div className='login-form'>
          <form className='login' action='/login' method='post' onSubmit={handleSubmit}>
            <label htmlFor='email'>
              New Password:
              <input
                className='login-input'
                type='password'
                name='password'
                value={password}
                onChange={handleChangePassword}
              />
            </label>

            <label htmlFor='email'>
              Confirm New Password:
              <input
                className='login-input'
                type='password'
                name='password_confirmation'
                value={password_confirmation}
                onChange={handleChangePasswordConfirmation}
              />
            </label>

            <button className='login-button'>Update password</button>
          </form>
        </div>
      </div>
    </>
  )
}
