import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import './App.css';

import Home from './Components/Home';
import About from './Components/About';
// import BasicForm from './Components/BasicForm';
import Products from './Services/Products';
import Product from './Services/Product';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import DataProvider from './Context/Context';
import Cart from './Components/Cart';
import Profile from './Components/Profile';


// import Shop from './Services/Shop';

function App() {
  return (
    <DataProvider>
    <Router>
      <div className="App">
        <header>
          {/* <h1>E-COMMERCE APP</h1> */}
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
            <Route exact path="/login" element={<Login />}/>
            <Route exact path="/register" element={<Signup />}/>
            <Route path="/products" element={<Products />}/>
            <Route path="/products/:id" element={<Product />}/>
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
    </DataProvider> 
  );
}

export default App;