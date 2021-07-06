import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Homepage from './pages/home/Home'
import About from './pages/about/About'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import City from './pages/city/City'
import Logout from './pages/logout/Logout'
import Contact from './pages/contact/Contact'

import { UserContextProvider } from './UserContext'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, far, fas)

import './common/colors.scss'
import './common/main.scss'

require('../img/favicon.png').default
require('../img/warsaw.jpg').default
require('../img/rio-de-janeiro.jpg').default
require('../img/london.jpg').default

export default function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Header />

        <div className='app'>
          <Switch>
            <Route path='/' exact component={Homepage} />
            <Route path='/sign-in' exact component={Login} />
            <Route path='/sign-up' exact component={Register} />
            <Route path='/sign-out' exact component={Logout} />
            <Route path='/contact' component={Contact} />
            <Route path='/about-us' exact component={About} />
            <Route path='/city/:city' component={City} />
          </Switch>
        </div>

        <Footer />
      </BrowserRouter>
    </UserContextProvider>
  )
}
