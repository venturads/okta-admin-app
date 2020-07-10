import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <h1>hello</h1>
      </div>
    </Router>
  );
}

export default App;
