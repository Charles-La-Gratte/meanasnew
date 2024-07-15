import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Main.jsx";
import Dashboard from "./Components/DashBoard/Dashboard";
import Preprocess from './Components/DashBoard/Pre-process.jsx';
import Errorchecker from './Components/DashBoard/Errorchecker.jsx';
import Postprocess from './Components/DashBoard/Post-Process.jsx';
import Authentication from './Components/Home/Authentication.jsx';
import FreeAuth from './Components/Home/FreeAuth.jsx';
import Pricing from './Components/Home/Pricing.jsx';
import About from './Components/Home/About.jsx';


function MeanAsApp() {
  return (<div className='App'>
                <Router>
                    <Routes>
                      <Route index path="/" element={<Home/>}/>
                      <Route index path="/Dashboard" element={<Dashboard/>}/>
                      <Route index path="/Preprocess" element={<Preprocess/>}/>
                      <Route index path="/Errorchecker" element={<Errorchecker/>}/>
                      <Route index path="/Postprocess" element={<Postprocess/>}/>
                      <Route index path="/Authentication" element={<Authentication/>}/>
                      <Route index path="/FreeAuth" element={<FreeAuth/>}/>
                      <Route index path="/Pricing" element={<Pricing/>}/>
                      <Route index path="/About" element={<About/>}/>
                    </Routes>
                </Router>
           </div>)
}

export default MeanAsApp;
