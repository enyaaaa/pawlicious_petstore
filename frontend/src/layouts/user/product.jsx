import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";

import Announcement from '../../components/user/announcement';
import Navbar from '../../components/user/navbar';
import Footer from '../../components/user/footer';
import { useLocation } from "react-router-dom";


const product = () => {

  const location = useLocation();

  console.log(location.state);
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={location.state.productImage} />
        </ImgContainer>
        <InfoContainer>
          <Title>{location.state.productName}</Title>
          <Desc>
          {location.state.productName}
          </Desc>
          <Price>$44</Price>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
          </AddContainer>
          <Button>ADD TO CART</Button>
        </InfoContainer>
      </Wrapper>
      <Footer/>
    </Container>
  );
};

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 50vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
    margin-top: 10px;
    padding: 8px;
    background-color: #d6b0a6;
    color: white;
    border: none;
    border-radius:10px;
`;

export default product;