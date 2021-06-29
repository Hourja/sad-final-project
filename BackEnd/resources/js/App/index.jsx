import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer/Footer.jsx';
import Header from './Header/Header.jsx';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
// } from "react-router-dom";


ReactDOM.render(
    // <Router>
    //     <Switch>
        
    //     </Switch>
    // </Router>
    <>
        <h1>Hello this is main page</h1>
        <Header />
        <Footer />

    </>

, document.getElementById('app'));

