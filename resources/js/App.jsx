import React from 'react'
import ReactDOM from 'react-dom'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Homepage from './pages/home/Home'
import About from './pages/about/About'
import Register from './pages/register/Register.jsx'
import Login from './pages/login/Login.jsx'
import Learn from './pages/learn/Learn.jsx'
import Phrases from './pages/learn/Phrases.jsx'
import Topics from './pages/learn/Topics.jsx'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, far, fas)

import Logout from './pages/logout/Logout.jsx'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { UserContextProvider } from './UserContext'

import './common/colors.scss'
import './common/main.scss'

export default function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Header />

        <div className='app'>
          <Switch>
            n
            <Route path='/' exact component={Homepage} />
            <Route exact path='/sign-in' exact component={Login} />
            <Route exact path='/sign-up' exact component={Register} />
            <Route exact path='/sign-out' exact component={Logout} />
            <Route exact path='/learn' exact component={Learn} />
            <Route exact path='/phrases' exact component={Phrases} />
            <Route exact path='/topics' exact component={Topics} />
            <Route path='/about-us' exact component={About} />
          </Switch>
        </div>

        <Footer />
      </BrowserRouter>
    </UserContextProvider>
  )
}
