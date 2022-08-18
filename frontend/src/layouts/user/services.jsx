import React from 'react';
import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom';
import { mobile } from "../../responsive";

import Announcement from '../../components/user/announcement';
import Navbar from '../../components/user/navbar';
import Footer from '../../components/user/footer';

const services = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <div>
        <Header>Services</Header>
        <Wrapped>
          <Container>
            <Image src="https://cdn.shopify.com/s/files/1/0508/4767/8644/articles/how-to-plan-an-epic-doggy-playdate_1138x.jpg?v=1637914006" />
            <Info>
              <Title>Services for Dogs</Title>
              <NavLink to='/addappointment'>BOOK NOW</NavLink>
            </Info>
          </Container>
          <Container>
            <Image src="https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg" />
            <Info>
              <Title>Services for Cats</Title>
              <NavLink to='/addappointment'>BOOK NOW</NavLink>
            </Info>
          </Container>
          <Container>
            <Image src="https://media.npr.org/assets/img/2017/09/14/gettyimages-10141026_slide-67be9fc1bca330b26debade87690b5e84286614d-s1100-c50.jpg" />
            <Info>
              <Title>Services for Small Pets</Title>
              <NavLink to='/addappointment'>BOOK NOW</NavLink>
            </Info>
          </Container>
        </Wrapped>
      </div>
      <Footer />
    </div>

  );
};

const Header = styled.h1`
    margin-top: 20px;
    color: black;
    text-align: center;
`;

const Wrapped = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 60vh;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    opacity: 0.5;
    object-fit: cover;
    ${mobile({ height: "40vh" })}
`;


const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    color: black;
    text-align: center;
`;

const NavLink = styled(Link)`
    padding: 10px;
    font-size: 15px;
    color: black;
    background-color: #d6b0a6;
    cursor: pointer;
    border-radius: 20px;
    border: none;
    text-decoration: none;
    &:hover {
      color: #000;
    }
`;

export default services;