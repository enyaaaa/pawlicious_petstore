import styled from "styled-components";
import DogProducts from "../../components/user/products";
import Announcement from '../../components/user/announcement';
import Navbar from '../../components/user/navbar';
import Footer from '../../components/user/footer';
import { useParams } from "react-router-dom";



const dogproducts = () => {

  const {type} = useParams();

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>{type} Products</Title>
      <DogProducts/>
      <Footer />
    </Container>
  );
};

const Container = styled.div``;

const Title = styled.h1`
  margin-top: 20px;
  text-align: center;
`;

export default dogproducts;