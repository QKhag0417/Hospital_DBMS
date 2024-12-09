import logo from './logo.svg';
import './App.css';
import React from 'react';
import { UserContext } from './context/UserContext.js'
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import HomeBeforeLogin from './components/HomeBeforeLogin.jsx';
import Patient from './components/Patient.jsx';
import Doctor from './components/Doctor.jsx';
import Nurse from './components/Nurse.jsx';
import Other from './components/Other.jsx';
import Dependent from './components/Dependent.jsx';
import Receptionist from './components/Receptionist.jsx';
import Login from './components/Login.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [user, setUser] = useState({ token: null, type: null, listFiles: [] });
  const [cookies] = useCookies();
  
  useEffect(() => {
    const userCredentials = JSON.parse(localStorage.getItem('userCredentials'));
    
    if (userCredentials === null || userCredentials === undefined) {
      setUser({ token: null, type: null, listFiles: [] });
    }
    else {
      setUser({ ...user, ...userCredentials });
    }
  }, [cookies]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomeBeforeLogin />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/patient" element={<Patient/>} />
          <Route path="/doctor" element={<Doctor/>} />
          <Route path="/nurse" element={<Nurse/>} />
          <Route path="/other" element={<Other/>} />
          <Route path="/dependent" element={<Dependent/>} />
          <Route path="/receptionist" element={<Receptionist/>} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
