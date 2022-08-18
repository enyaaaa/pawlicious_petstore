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

import axios from 'axios'
import RequireAuth from './components/RequireAuth';
import AdminProfile from './layouts/admin/profile';
import AdminDashboard from './layouts/admin/dashboard';
import AdminUsers from './layouts/admin/users';
import AdminProducts from './layouts/admin/products';
import AddProduct from './layouts/admin/addproduct';
import EditProduct from './layouts/admin/editproduct';
import AdminOrders from './layouts/admin/orders';
import AdminAppointments from './layouts/admin/appointments';
import AddAppointment from './layouts/admin/addappointment';

import { getProducts } from "./redux/actions/products";
import store from './redux/store'

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

  useEffect(() => {
    store.dispatch(getProducts())
  }, [])

  return (
    <Routes>
      {/* main routes */}
      <Route path='/' element={<Home />} />
      <Route path='products/:type' element={<Products />} />
      <Route path='product' element={<Product />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='services' element={<Services />} />
      <Route path='profile' element={<Profile />} />
      <Route path='cart' element={<Cart />} />

      {/* admin routes */}
      <Route element={<RequireAuth />}>
        <Route path='admin' element={<AdminDashboard />} />
        <Route path='admin/profile' element={<AdminProfile />} />
        <Route path='admin/users' element={<AdminUsers />} />
        <Route path='admin/products' element={<AdminProducts />} />
        <Route path='admin/addproduct' element={<AddProduct />} />
        <Route path='admin/editproduct/:id' element={<EditProduct />} />
        <Route path='admin/orders' element={<AdminOrders />} />
        <Route path='admin/appointments' element={<AdminAppointments />} />
        <Route path='admin/addappointment' element={<AddAppointment />} />
      </Route>
    </Routes>
  );
}

export default App;
