import styled from "styled-components";
import Products from "../../components/user/products";
import Announcement from '../../components/user/announcement';
import Navbar from '../../components/user/navbar';
import Footer from '../../components/user/footer';
import { useParams } from "react-router-dom";



const products = () => {

  //using params to find type
  const { type } = useParams();

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>{type} Products</Title>
      <Products />
      <Footer />
    </Container>
  );
};

const Container = styled.div``;

const Title = styled.h1`
  margin-top: 20px;
  text-align: center;
`;

export default products;