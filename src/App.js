import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import Dashboard from './components/Dashboard'
import ParticlesBg from "particles-bg";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Dashboard />
      <ParticlesBg type="bubbles" bg={true}/>
    </div>
  );
}

export default App;
