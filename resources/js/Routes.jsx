import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Homepage from './pages/home/Home'
import About from './pages/about/About'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import City from './pages/city/City'
import Logout from './pages/logout/Logout'
import Contact from './pages/contact/Contact'
import Dashboard from './pages/admin/Dashboard'

import UserContext from './UserContext'
//admin imports

export default function Routes() {
  const { loggedIn } = useContext(UserContext)

  return (
    <Switch>
      <Route path='/' exact component={Homepage} />
      <Route path='/sign-in' exact component={() => (loggedIn ? <Redirect to='/' /> : <Login />)} />
      <Route path='/sign-up' exact component={() => (loggedIn ? <Redirect to='/' /> : <Register />)} />
      <Route path='/sign-out' exact component={Logout} />
      <Route path='/contact' component={Contact} />
      <Route path='/about-us' exact component={About} />
      <Route path='/city/:city' component={City} />
      {/* ADMIN DASHBOARD */}
      <Route path='/admin' component={() => (!loggedIn ? <Redirect to='/' /> : <Dashboard />)} />
    </Switch>
  )
}
