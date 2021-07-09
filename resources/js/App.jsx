import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'

import Footer from './components/Footer'
import Header from './components/Header'
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
require('../img/amanda.jpg').default
require('../img/spiros.jpg').default
require('../img/david.jpg').default
require('../img/santorini.jpg').default

export default function App() {
  
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Header />

        <div className='app'>
          <Routes />
        </div>

        <Footer />
      </BrowserRouter>
    </UserContextProvider>
  )
}
