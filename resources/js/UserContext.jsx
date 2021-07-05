import React, { createContext, useState } from 'react'

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

  function login() {}

  return <UserContext.Provider value={{ ...userContext, login }}> {children} </UserContext.Provider>
}
