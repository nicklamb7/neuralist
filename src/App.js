import React from 'react';
import './App.css';
import Navbar from './app/components/navbar/Navbar';
import Home from './app/pages/home/Home';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
