import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Homepage from './pages/home/Home';
import About from './pages/about/About';
import Register from './pages/register/Register.jsx';
import Login from './pages/login/Login.jsx';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, far, fas)

import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";

import './common/colors.scss'
import './common/main.scss'

ReactDOM.render(<BrowserRouter>

        <Header />

        <div className='app'>
          <Switch>
            <Route path='/' exact component={Homepage} />
            <Route exact path="/sign-in" exact component={Login}/>
            <Route exact path="/sign-up" exact component={Register}/>
            <Route path='/about-us' exact component={About}/>
          </Switch>
        </div>


    <Footer />
  </BrowserRouter>
, document.getElementById('app'));
