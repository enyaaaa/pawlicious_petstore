import { Badge } from "@material-ui/core";
import { LocalMallOutlined, SearchOutlined, AccountCircleOutlined, Menu } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import logo from '../images/pets.png';
import { NavLink as Link } from 'react-router-dom';


const Image = styled.img`
    height: 50px;
    width: 50px;
`

const Container = styled.div`
  height: 70px;
`;

const Wrapper = styled.div`
  padding: 10px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

const Logo = styled.h1`
  color: #bb7b6b;
  font-family: 'Abril Fatface', cursive;
  font-weight: 400;
`;

const Center = styled.div`
  display: flex;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <NavLink to='/'>
            <Image src={logo} />
            <Logo>PAWLICIOUS</Logo>
          </NavLink>
        </Left>
        <Center>
          <NavLink to="/dogProducts">Dogs</NavLink>
          <NavLink to='/catProducts'>Cats</NavLink>
          <NavLink to='/smallpetsProducts'>Small Pets</NavLink>
          <NavLink to='/services'>Services</NavLink>
        </Center>
        <Right>
          <NavLink to='/'><SearchOutlined /></NavLink>
          <NavLink to='/login'><AccountCircleOutlined /></NavLink>
          <NavLink to='/'>
            <Badge badgeContent={4} color="primary" overlap="rectangular">
              <LocalMallOutlined />
            </Badge>
          </NavLink>
          <NavLink to='/'><Menu /></NavLink>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default navbar;
