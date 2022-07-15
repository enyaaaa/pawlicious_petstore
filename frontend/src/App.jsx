import React from 'react';
import Announcement from './components/Announcement';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Products from './pages/products';
import Product from './pages/product';
import Services from './pages/services';
import Login from './pages/login';
import Register from './pages/register';
import Profile from './pages/profile';
import Cart from './pages/cart';

import axios from 'axios'

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.defaults.withCredentials = true;
axios.interceptors.request.use(function(config){
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
})

function App() {
  return (
    <Router>
      <Announcement />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/services' element={<Services/>} />        
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile' element={<Profile/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
