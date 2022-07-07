import React from 'react';
import Announcement from './components/Announcement';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import DogProducts from './pages/dogProducts';
import CatProducts from './pages/catProducts';
import SmallPetsProducts from './pages/smallpetsProducts';
import Services from './pages/services';
import Login from './pages/login';

function App() {
  return (
    <Router>
      <Announcement />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dogProducts' element={<DogProducts/>} />
        <Route path='/catProducts' element={<CatProducts/>} />
        <Route path='/smallpetsProducts' element={<SmallPetsProducts/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;
