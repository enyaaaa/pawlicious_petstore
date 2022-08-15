import React from 'react'
import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom';
import { AlternateEmailOutlined, PhoneIphone, LocationOnOutlined} from "@material-ui/icons";



const footer = () => {
    return (
        <Container>
          <Left>
            <Logo>PAWLICIOUS</Logo>
            <Desc>
              Pawlicious is a pet store that is offering reasonably priced, premium
              wholesome, eco-friendly pet food, treats, and goods 
              for a healthier, happier pet
            </Desc>
          </Left>
          <Center>
            <Title>Shop</Title>
            <List>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/products/Cat">Cat Products</NavLink>
              <NavLink to="/products/Dog">Dog Products</NavLink>
              <NavLink to="/products/Small Pets">Small Pets Products</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/">Pet Food Recipes</NavLink>
            </List>
          </Center>
          <Right>
            <Title>Contact</Title> 
            <Contact>
              <LocationOnOutlined style={{marginRight:"10px"}} /> 16 RAFFLES QUAY 17-00 HONG LEONG BUILDING, SINGAPORE 048581   
            </Contact>
            <Contact>
              <PhoneIphone style={{marginRight:"10px"}} /> +65 9234 3421
            </Contact>
            <Contact>
              <AlternateEmailOutlined style={{marginRight:"10px"}} /> pawlicious_petstore@hotmail.com
            </Contact>
            <Payment src="https://www.motoworld.com.sg/catalog/view/theme/motoworld/image/eway_cards.png" />
          </Right>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 15px 0px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const NavLink = styled(Link)`
  width: 50%;
  margin-bottom: 10px;
  color: #000;
  display: flex;
  text-decoration: none;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const Contact = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

export default footer