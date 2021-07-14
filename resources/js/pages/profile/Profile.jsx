import './profile.scss'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import UserContext from '../../UserContext'
import Gravatar from './Gravatar'
import UpdateProfileForm from '../../components/UpdateProfileForm'
import UpdatePassword from '../resetPassword/UpdatePassword'

export default function Profile() {
  const { user, loggedIn, isAdmin } = useContext(UserContext)
  const [{ name, email }, setValues] = useState({
    name: `${user.name}`,
    email: `${user.email}`
  })

  return (
    <div className='profile-page'>
      <h1 className='profile-title'>My profile</h1>
      <Gravatar size='200' />
      <div className='user-details'>
        <UpdateProfileForm name={name} email={email} setValues={setValues} />
        <UpdatePassword />
        {/* <button>Reset Password</button> */}
      </div>
      {loggedIn && isAdmin && (
        <Link to='/admin' className='__link'>
          Admin Panel
        </Link>
      )}
      {loggedIn && (
        <Link to='/reset-password' className='__link'>
          Reset Password
        </Link>
      )}
    </div>
  )
}
