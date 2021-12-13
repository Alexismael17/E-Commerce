import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

import './App.css';

import Home from './Components/Home';

import About from './Components/About';

import BasicForm from './Components/BasicForm';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>DEMO APP</h1>
        </header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<BasicForm />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;