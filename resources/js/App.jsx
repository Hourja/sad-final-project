import React, { useReducer } from "react";
import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from "styled-components";
import { light, dark } from "../js/components/dark mode/Themes";
import Context from './components/dark mode/Context';
import reducer from './components/dark mode/Reducer';
import { GlobalStyles } from "./components/dark mode/GlobalStyles";

import Routes from './Routes'

import Footer from './components/Footer'
import Header from './components/Header'
import { UserContextProvider } from './UserContext'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, far, fas)

import './app.scss'

require('../img/favicon.png').default
require('../img/warsaw.jpg').default
require('../img/rio-de-janeiro.jpg').default
require('../img/amanda.jpg').default
require('../img/spiros.jpg').default
require('../img/david.jpg').default
require('../img/santorini.jpg').default

export default function App() {

  const [state, dispatch] = useReducer(reducer, {
		isDark: false
	});

  return (
    <Context.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={state.isDark ? dark : light}>
        <GlobalStyles />
            <UserContextProvider>
              <BrowserRouter>
                <Header />
                <Routes />
                <Footer />
              </BrowserRouter>
            </UserContextProvider>
      </ThemeProvider>
    </Context.Provider>
    )
}
