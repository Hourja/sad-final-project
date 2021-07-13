import './profile.scss'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from '../../UserContext'
import Gravatar from './Gravatar'

export default function Profile() {
  const { user, loggedIn, isAdmin } = useContext(UserContext)

  return (
    <div className='profile-page'>
      <h1 className='profile-title'>My profile</h1>
      <Gravatar size='200' />
      <div className='user-details'>
        <p>{user.name}</p>
        <p>{user.email}</p>
        {/* <button>Reset Password</button> */}
      </div>
      {loggedIn && isAdmin && (
        <Link to='/admin' className='__link'>
          Admin Panel
        </Link>
      )}
    </div>
  )
}
