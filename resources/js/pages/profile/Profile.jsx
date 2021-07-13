import './profile.scss'
import { useEffect, useState, useContext } from 'react'
import fetchUsers from '../../requests/fetchUsers'
import UserContext from '../../UserContext'
window.fetchUsers = fetchUsers

export default function Profile() {
  const { user } = useContext(UserContext)
  // console.log(user)
  // const [users, setUsers] = useState(null)

  // useEffect(loadUsers, [])

  // async function loadUsers() {
  //   const loadedUsers = await fetchUsers()
  //   setUsers(loadedUsers)
  // }

  // if (!users) {
  //   return 'Loading...'
  // }

  return (
    <div className='profile-page'>
      <h1 className='profile-title'>My profile</h1>
      {/* <img src={users[0].photo_url} alt={users[0].name} /> */}
      <div className='user-details'>
        <p>Name of User {user.name}</p>
        <p>Email</p>
        <button>Reset Password</button>
      </div>
    </div>
  )
}
