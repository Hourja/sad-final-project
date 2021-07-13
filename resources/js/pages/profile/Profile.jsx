import './profile.scss'
import { useEffect, useState } from 'react'
import fetchUsers from '../../requests/fetchUsers'
window.fetchUsers = fetchUsers

export default function Profile() {
  const [users, setUsers] = useState(null)

  useEffect(loadUsers, [])

  async function loadUsers() {
    const loadedUsers = await fetchUsers()
    setUsers(loadedUsers)
  }

  if (!users) {
    return 'Loading...'
  }

  return (
    <div className='profile-page'>
      <h1 className='profile-title'>My profile</h1>
      <img src='/resources/img/amanda.jpg' alt='' />
      <div className='user-details'>
        <p>Name of User</p>
        <p>Email</p>
        <button>Reset Password</button>
        <div className='__developer-list'>{users.map(user)}</div>
      </div>
    </div>
  )
}

function user(profile) {
  return (
    <div className='__developer' key={profile.id}>
      <img src={`/images/${profile.photo_url}`} alt='' />
      <div className='__info'>
        <h3>{profile.name}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nostrum quasi, voluptate esse officia quam ullam
          doloremque similique quibusdam omnis odio hic id magni soluta necessitatibus quas iure! Ipsa, aut!
        </p>
      </div>
    </div>
  )
}
