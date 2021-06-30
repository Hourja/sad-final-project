import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Homepage from './pages/Home.js';
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";


ReactDOM.render(
    // <Router>
    //     <Switch>
                // endpoint: /  -> Home
                // /login    -> Login
                // /Register -> register
                // /:city/ -> City
                // /:city/discover -> discover
                // /:city/learn -> Learn
                // -> about us
                // -> contact
                
                //</Switch>
    // </Router>
    <>
        <h1>Hello this is main page</h1>
        <Header />
        <BrowserRouter>
        <div className='app'>
          <NavBar />
          <Switch>
            <Route path='/' exact component={Homepage} />
          </Switch>
        </div>
      </BrowserRouter>
        <Footer />

    </>

, document.getElementById('app'));

