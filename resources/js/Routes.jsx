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
import Profile from './pages/profile/Profile'

import UserContext from './UserContext'
import UpdatePasswordForm from './pages/resetPassword/UpdatePassword'
import ResetPassword from './pages/resetPassword/ResetPassword'
import RecoverPassword from './pages/resetPassword/recoverPassword'

export default function Routes() {
  const { loggedIn, isAdmin } = useContext(UserContext)

  return (
    <Switch>
      <Route path='/' exact component={Homepage} />
      <Route path='/sign-in' exact component={() => (loggedIn ? <Redirect to='/' /> : <Login />)} />
      <Route path='/sign-up' exact component={() => (loggedIn ? <Redirect to='/' /> : <Register />)} />
      <Route path='/sign-out' exact component={Logout} />
      <Route path='/contact' component={Contact} />
      <Route path='/about-us' exact component={About} />
      <Route path='/city/:city' component={City} />
      <Route path='/forgot-my-password' component={() => (loggedIn ? <Redirect to='/' /> : <ResetPassword />)} />
      <Route path='/recover-my-password' component={() => (loggedIn ? <Redirect to='/' /> : <RecoverPassword />)} />
      {/* ADMIN DASHBOARD */}
      <Route path='/admin' component={() => (loggedIn && isAdmin ? <Dashboard /> : <Redirect to='/' />)} />
      <Route path='/profile' exact component={() => (loggedIn ? <Profile /> : <Redirect to='/' />)} />
      <Route path='/reset-password' exact component={UpdatePasswordForm} />
    </Switch>
  )
}
