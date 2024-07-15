import React, { useEffect, useState } from 'react';
import "./App.css";
import { BrowserRouter as  Route, Routes } from 'react-router-dom';
import Home from "./Main.jsx";
import Dashboard from "./Components/DashBoard/Dashboard";
import Preprocess from './Components/DashBoard/Pre-process.jsx';
import Errorchecker from './Components/DashBoard/Errorchecker.jsx';
import Postprocess from './Components/DashBoard/Post-Process.jsx';
import Authentication from './Components/Home/Authentication.jsx';
import FreeAuth from './Components/Home/FreeAuth.jsx';
import Pricing from './Components/Home/Pricing.jsx';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // Importez useNavigate pour la navigation

const MAX_SESSION_DURATION = 1 * 60 * 1000; // 1 minute

function MeanAsApp() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate(); // Utilisez useNavigate pour la navigation

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
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
  }, []);

  const checkSessionDuration = () => {
    const intervalId = setInterval(() => {
      const loginTime = localStorage.getItem('loginTime');
      if (loginTime && (Date.now() - loginTime > MAX_SESSION_DURATION)) {
        signOut(auth).then(() => {
          alert('Your session has expired. Please log in again.');
          setIsAuthenticated(false);
          localStorage.removeItem('loginTime');
          clearInterval(intervalId);
          navigate('/FreeAuth'); // Utilisez navigate pour rediriger vers FreeAuth après la déconnexion
        }).catch(error => {
          console.error('Error signing out: ', error);
        });
      }
    }, 1000);
  };

  return (
    <div className='App'>
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
    </div>
  );
}

export default MeanAsApp;
