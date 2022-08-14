import React from 'react';

import Announcement from '../../components/user/announcement';
import Navbar from '../../components/user/navbar';
import Footer from '../../components/user/footer';

const services = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <h1>Services</h1>
      <Footer/>
    </div>
    
  );
};

export default services;