import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import './App.css';

import Home from './Components/Home';
import About from './Components/About';
import BasicForm from './Components/BasicForm';
import Products from './Services/Products';
import Product from './Services/Product';
import Navbar from './Components/Navbar';

// import Shop from './Services/Shop';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>E-COMMERCE APP</h1>
          <Navbar />
        </header>
        {/* <nav>
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
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav> */}

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route path="/form" element={<BasicForm />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/products/:id" element={<Product />}/>
          
          {/* <Route path="/shop" element={<Shop />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;