import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './layouts/user/home';
import Products from './layouts/user/products';
import Product from './layouts/user/product';
import Services from './layouts/user/services';
import Login from './layouts/user/login';
import Register from './layouts/user/register';
import Profile from './layouts/user/profile';
import Cart from './layouts/user/cart';

import axios from 'axios'
import AdminProfile from './layouts/admin/profile';
import AdminDashboard from './layouts/admin/dashboard';
import AdminUsers from './layouts/admin/users';
import AdminProducts from './layouts/admin/products';
import AdminOrders from './layouts/admin/orders';

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
})

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:type' element={<Products/>} />
        <Route path='/product' element={<Product />} />
        <Route path='/services' element={<Services />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/admin/profile' element={<AdminProfile />} />
        <Route path='/admin/users' element={<AdminUsers />} />
        <Route path='/admin/products' element={<AdminProducts />} />
        <Route path='/admin/orders' element={<AdminOrders />} />
      </Routes>
    </Router>
  );
}

export default App;
