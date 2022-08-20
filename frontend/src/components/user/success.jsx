import Announcement from '../../components/user/announcement';
import Navbar from '../../components/user/navbar';
import Footer from '../../components/user/footer';
import styled from "styled-components";


function success() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Container>
        <Img src='https://www.citypay.io/images/client/hero-4.svg' />
      </Container>
      <Footer />
    </div>
  )
}

const Img = styled.img`
  height: 60%;
  width: 60%;
  transform: rotate(-14deg)
`;

const Container = styled.div`
  margin-left: 400px;

`;


export default success

