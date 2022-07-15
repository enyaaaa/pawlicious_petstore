import styled from "styled-components";



const announcement = () => {
  return <Container>Hurry get your fur babies some products! Free Shipping on Orders Over $100</Container>;
};

const Container = styled.div`
  height: 30px;
  background-color: #d6b0a6;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

export default announcement;
