import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import axios from 'axios'

import PrivateRoute from './components/PrivateRoute';
import Login from './components/LoginRegister/Login';
import Dashboard from './components/Dashboard';
import Register from './components/LoginRegister/Register';
function LandingPage() {

  const logout = () => {
    //also send a request to /api/logout once api is set up
    window.localStorage.removeItem('token')
  }


  return (
    <Router>
      <div className="App">
      
        <div className = "Banner">
          <img src = {require('./images/PokeHuddle-Title.png').default} alt = 'Name Banner' />
        </div>
        
        <div className = "Main-container">
          <img src = {require('./images/ashpika.png').default} alt = 'Ash and Pikachu landing page' />
            <Link to ='/login'>Login</Link>
            <span> | </span>
            <Link to ='/register'>Not a Member?</Link>

            {/*          
              <Link onClick={logout}>Logout</Link>
              <Link to ='/dashboard'>dashboard</Link>
  */}
          <div className= "Route-container">
            <Switch>
              <PrivateRoute exact path =  '/dashboard' component = {Dashboard}></PrivateRoute>
              <Route path = '/login' component ={Login} />
              <Route path = '/register' component ={Register} />
              <Route component = {Login} />
            </Switch>
            </div>
        </div>
      </div>
    </Router>
  );
}

export default LandingPage;