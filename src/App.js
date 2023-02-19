import logo from './logo.svg';
import React , { useState } from 'react';
import './App.css';
import { BrowserRouter , Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/Pages/HomePage';
function App() {
  
  return (
    <React.Fragment>
          <BrowserRouter>
          <Navbar/>
        
        <Routes>
        <Route path='/home'  component={ HomePage }/>
        
        </Routes>
  </BrowserRouter>,
        
        
     
      <h2>sfmks</h2>
    </React.Fragment>
  );
}

export default App;
