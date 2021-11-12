import React from 'react';
import './App.css';
import Navbar from './app/components/navbar/Navbar';
import Home from './app/pages/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavLinks from './app/components/navLinks/NavLinks';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="main">
          <NavLinks />
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
