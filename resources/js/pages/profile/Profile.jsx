import './profile.scss'
import { useContext } from 'react'
import UserContext from '../../UserContext'
import Gravatar from './Gravatar'

export default function Profile() {
  const { user } = useContext(UserContext)

  return (
    <div className='profile-page'>
      <h1 className='profile-title'>My profile</h1>
      <Gravatar />
      <div className='user-details'>
        <p>{user.name}</p>
        <p>{user.email}</p>
        {/* <button>Reset Password</button> */}
      </div>
      zzzz
    </div>
  )
}
