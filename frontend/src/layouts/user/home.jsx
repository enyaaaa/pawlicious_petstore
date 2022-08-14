import Slider from "../../components/user/slider"
import Category from "../../components/user/category"

import Announcement from '../../components/user/announcement';
import Navbar from '../../components/user/navbar';
import Footer from '../../components/user/footer';

const home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider/>
      <Category/>
      <Footer/>
    </div>
  )
}

export default home