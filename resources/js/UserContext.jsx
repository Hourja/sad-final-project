import React, { createContext, useState } from 'react'
import * as userRequests from './requests/userRequests'

const defaultContext = {
  loggedIn: false
}

const UserContext = createContext(defaultContext)
export default UserContext

export function UserContextProvider({ children }) {
  const [userContext, setUserContext] = useState(defaultContext)
  const token = localStorage.getItem('my_token')
  if (token) {
    // get user data
  }

  async function login({ email, password }) {
    const { success, user, token } = await userRequests.login({ email, password })

    if (!success) {
      return false
    }

    setUserContext({ loggedIn: true, token, user })
    return true
  }

  function logout() {}

  async function retrieveUser() {
    const { success, user, token } = await userRequests.retrieveUser()

    if (!success) return

    setUserContext({ loggedIn: true, token, user })
  }

  function register({ email, name, password, password_confirmation }) {
    console.log({ email, name, password, password_confirmation })

    // let request_data = { email, name, password, password_confirmation }
    // const response = await fetch('/api/new-register', {
    //   method: 'POST',
    //   body: JSON.stringify(request_data),
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-type': 'application/json',
    //     'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    //   }
    // })
    const user = { name }

    const token = '1|B6Jv4GmU6161jLsCA2MHwoED5ofsVwbfWpSGWqXp'
    setUserContext({ loggedIn: true, token, user })
  }

  return (
    <UserContext.Provider value={{ ...userContext, login, logout, register, retrieveUser }}>
      {children}
    </UserContext.Provider>
  )
}
