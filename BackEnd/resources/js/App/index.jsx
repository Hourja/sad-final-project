import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Homepage from './pages/home/Home';
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";



ReactDOM.render(<>
        <h1>Hello this is main page</h1>
        <Header />
         <BrowserRouter>
        <div className='app'>
          <Switch>
            <Route path='/' exact component={Homepage} />
          </Switch>
        </div>
      </BrowserRouter>

      <Footer />
        </>, document.getElementById('app'));

