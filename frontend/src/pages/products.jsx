import styled from "styled-components";
import Products from "../components/products";



const products = () => {
  return (
    <Container>
      <Title>Products</Title>
      <Products />
    </Container>
  );
};

const Container = styled.div``;

const Title = styled.h1`
  margin-top: 20px;
  text-align: center;
`;

export default products;