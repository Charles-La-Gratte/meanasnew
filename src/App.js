//import React from 'react';
import "./App.css";
import React, { useEffect, useState } from 'react';
import { auth } from './firebase.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Main.jsx";
import Dashboard from "./Components/DashBoard/Dashboard";
import Preprocess from './Components/DashBoard/Pre-process.jsx';
import Errorchecker from './Components/DashBoard/Errorchecker.jsx';
import Postprocess from './Components/DashBoard/Post-Process.jsx';
import Authentication from './Components/Home/Authentication.jsx';
import FreeAuth from './Components/Home/FreeAuth.jsx';
import Pricing from './Components/Home/Pricing.jsx';


const MAX_SESSION_DURATION = 1 * 60 * 1000; // 1 minutes
function MeanAsApp() {
  const [ setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.auth().onAuthStateChanged(user => {
      if (user) {
        const loginTime = Date.now();
        localStorage.setItem('loginTime', loginTime);
        setIsAuthenticated(true);
        checkSessionDuration();
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe();
  });

  const checkSessionDuration = () => {
    const intervalId = setInterval(() => {
      const loginTime = localStorage.getItem('loginTime');
      if (loginTime && (Date.now() - loginTime > MAX_SESSION_DURATION)) {
        auth.auth().signOut().then(() => {
          alert('Your session has expired. Please log in again.');
          clearInterval(intervalId);
        }).catch(error => {
          console.error('Error signing out: ', error);
        });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  };

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Preprocess" element={<Preprocess />} />
          <Route path="/Errorchecker" element={<Errorchecker />} />
          <Route path="/Postprocess" element={<Postprocess />} />
          <Route path="/Authentication" element={<Authentication />} />
          <Route path="/FreeAuth" element={<FreeAuth />} />
          <Route path="/Pricing" element={<Pricing />} />
        </Routes>
      </Router>
    </div>
  );
}


export default MeanAsApp;
