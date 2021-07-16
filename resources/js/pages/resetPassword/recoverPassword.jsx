import './recoverPassword.scss'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import fetchRecoverPassword from '../../requests/fetchRecoverPassword'
import Errors from '../../components/Errors'

export default function RecoverPassword() {
  const [{ password, password_confirmation }, setValues] = useState({
    password: '',
    password_confirmation: ''
  })
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const [reseting, setReseting] = useState(false)
  const [errors, setErrors] = useState(null)
  const [resetSent, setResetSent] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    setErrors(null)
    if (reseting) return
    setReseting(true)

    const { success, errors } = await fetchRecoverPassword({
      password,
      password_confirmation,
      token: params.get('token'),
      email: params.get('email')
    })
    setReseting(false)

    if (!success) {
      setErrors(errors)
      return
    }
    setValues = {
      password: '',
      password_confirmation: ''
    }
    setResetSent(true)

    setTimeout(() => setResetSent(false), 3000)
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
                onChange={handleChangePasswordConfirmation}
              />
            </label>
            <input
              type='submit'
              value={reseting ? 'Updating...' : 'Update Password'}
              disabled={reseting}
              className='login-button'
            />
            {resetSent && <span className='__message'>Successfully saved your new password</span>}
          </form>
          <Errors errors={errors} />
        </div>
      </div>
    </>
  )
}
