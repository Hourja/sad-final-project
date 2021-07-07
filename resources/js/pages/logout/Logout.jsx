import { useEffect, useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'

import UserContext from '../../UserContext'

export default function Logout() {
  const [logoutWorked, setLogoutWorked] = useState(false)
  const { logout } = useContext(UserContext)

  useEffect(async () => {
    await logout()
    setTimeout(() => {
      setLogoutWorked(true)
    }, 2000)
  }, [])

  if (logoutWorked) {
    return <Redirect to='/' />
  }

  return <div className='__message'> Thank you for your visit !</div>
}
