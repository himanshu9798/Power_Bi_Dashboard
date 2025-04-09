import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'
import Sign from './pages/Sign';
import Signup from './pages/Signup';
import Header from './component/Header';
import Footer from './component/Footer';
import Tables from './pages/Tables';
import UserLogin from './component/UserLogin';
import Billing from './pages/Billing';
import Notisfication from './pages/Notisfication';
import Profile from './pages/Profile';
import ScrollToTop from './ScrollToTop';

function Routesapp() {
  return (
    <div style={{backgroundColor: "#f8f9fa"}}>
      
      <Router>
        <ScrollToTop/>
    
        <Routes>
        
            <Route path="/" element={<UserLogin/>}></Route>
            <Route path="/app" element={<App/>}></Route>
            <Route path="/sign" element={<Sign/>}></Route>
            <Route path="/signup" element={<Signup></Signup>}></Route>
            <Route path="/billing" element={<Billing/>}></Route>
            <Route path="/table" element={<Tables></Tables>}></Route>
            <Route path="/notisfication" element={<Notisfication/>}></Route>
            <Route path="/Profile" element={<Profile/>}></Route>

          
        </Routes>
      
      </Router>
      
    
    </div>
  )
}

export default Routesapp;
