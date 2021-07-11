import React, { createContext, useEffect, useState } from 'react'
import * as userRequests from './requests/userRequests'

const defaultContext = {
  loggedIn: false,
  isAdmin: false,
  token: null,
  user: null
}

const UserContext = createContext(defaultContext)
export default UserContext

export function UserContextProvider({ children }) {
  const [isReady, setIsReady] = useState(false)
  const [userContext, setUserContext] = useState(defaultContext)

  async function login({ email, password }) {
    const { success, user, token } = await userRequests.login({ email, password })

    if (!success) {
      return false
    }

    setUserContext({ loggedIn: true, isAdmin: user.type === 'admin', token, user })
    return true
  }

  async function logout() {
    await userRequests.logout()
    setUserContext(defaultContext)
  }

  async function register({ email, name, password, password_confirmation }) {
    const { success, user, token, errors } = await userRequests.register({
      email,
      name,
      password,
      password_confirmation
    })

    if (!success) {
      return {
        success: false,
        errors
      }
    }

    setUserContext({ loggedIn: true, isAdmin: false, token, user })
    return {
      success: true
    }
  }

  // this try to retrieve and validate the user before the app starts
  useEffect(async () => {
    const { success, user, token } = await userRequests.retrieveUser()

    if (!success) {
      setIsReady(true)
      return
    }

    setUserContext({ loggedIn: true, isAdmin: user.type === 'admin', token, user })
    setIsReady(true)
  }, [])

  return (
    <UserContext.Provider value={{ ...userContext, login, logout, register }}>
      {isReady ? children : <span>Loading...</span>}
    </UserContext.Provider>
  )
}
