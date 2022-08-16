import { Badge } from "@material-ui/core";
import { LocalMallOutlined, SearchOutlined, AccountCircleOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import logo from '../../assets/user/img/pets.png';
import { NavLink as Link } from 'react-router-dom';
import { mobile } from "../../responsive";

const navbar = () => {

  var AuthButtons = '';
  if (!localStorage.getItem('auth_token')) {
    AuthButtons = (
      <NavLink to='/login'><AccountCircleOutlined /></NavLink>
    );
  } else {
    AuthButtons = (
      <NavLink to='/profile'><AccountCircleOutlined /></NavLink>
    );
  }



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
          <NavLink to='/products/Dog'>Dog Products</NavLink>
          <NavLink to='/products/Cat'>Cat Products</NavLink>
          <NavLink to='/products/Small Pets'>Small Pets Products</NavLink>
          <NavLink to='/services'>Services</NavLink>
        </Center>
        <Right>
          <NavLink to='/'><SearchOutlined /></NavLink>
          {AuthButtons}
          <NavLink to='/cart'>
            <Badge badgeContent={4} color="primary" overlap="rectangular">
              <LocalMallOutlined />
            </Badge>
          </NavLink>
        </Right>
      </Wrapper>
    </Container>
  );
};

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
  ${mobile({ padding: "10px 0px" })}
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
  &:hover {
    color: #bb7b6b;
  }
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

export default navbar;
