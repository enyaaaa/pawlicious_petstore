import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Home from './layouts/user/home';
import Products from './layouts/user/products';
import Product from './layouts/user/product';
import Services from './layouts/user/services';
import Login from './layouts/user/login';
import Register from './layouts/user/register';
import Profile from './layouts/user/profile';
import Cart from './layouts/user/cart';
import AddAppointment from './layouts/user/addappointment';
import EditProfile from './layouts/user/editprofile';

import axios from 'axios'
import RequireAuth from './components/RequireAuth';
import AdminProfile from './layouts/admin/profile';
import AdminDashboard from './layouts/admin/dashboard';
import AdminUsers from './layouts/admin/users';
import AdminEditProfile from './layouts/admin/editprofile';
import AdminProducts from './layouts/admin/products';
import AddProduct from './layouts/admin/addproduct';
import EditProduct from './layouts/admin/editproduct';
import AdminOrders from './layouts/admin/orders';
import AdminAppointments from './layouts/admin/appointments';
import Success from './components/user/success';

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
    <Routes>
      {/* main routes */}
      <Route path='/' element={<Home />} />
      <Route path='products/:type' element={<Products />} />
      <Route path='product/:type/:id' element={<Product />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='services' element={<Services />} />
      <Route path='profile' element={<Profile />} />
      <Route path='editprofile' element={<EditProfile />} />
      <Route path='cart' element={<Cart />} />
      <Route path='addappointment' element={<AddAppointment />} />
      <Route path='success' element={<Success />} />

      {/* admin routes */}
      <Route element={<RequireAuth />}>
        <Route path='admin' element={<AdminDashboard />} />
        <Route path='admin/profile' element={<AdminProfile />} />
        <Route path='admin/editprofile' element={<AdminEditProfile />} />
        <Route path='admin/users' element={<AdminUsers />} />
        <Route path='admin/products' element={<AdminProducts />} />
        <Route path='admin/addproduct' element={<AddProduct />} />
        <Route path='admin/editproduct/:id' element={<EditProduct />} />
        <Route path='admin/orders' element={<AdminOrders />} />
        <Route path='admin/appointments' element={<AdminAppointments />} />
      </Route>
    </Routes>
  );
}

export default App;
