import React from "react";
import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom';
import { AccountCircleOutlined, CreditCardRounded, DashboardRounded, StoreRounded, PersonOutlineRounded, ExitToAppRounded, AccessAlarmOutlined } from "@material-ui/icons";

const Sidebar = () => {
  return (
    <div>
      <Top>
        <Logo>ADMIN</Logo>
      </Top>
      <Container>
        <Title>MAIN</Title>
        <NavLink to='/admin'>
          <Icon><DashboardRounded /></Icon>
          Dashboard
        </NavLink>
        <Title>LISTS</Title>
        <NavLink to='/admin/users'>
          <Icon><PersonOutlineRounded /></Icon>
          Users
        </NavLink>
        <NavLink to='/admin/products'>
          <Icon><StoreRounded /></Icon>
          Products
        </NavLink>
        <NavLink to='/admin/orders'>
          <Icon><CreditCardRounded /></Icon>
          Orders
        </NavLink>
        <NavLink to='/admin/appointments'>
          <Icon><AccessAlarmOutlined /></Icon>
          Appointments
        </NavLink>
        <Title>USER</Title>
        <NavLink to='/admin/profile'>
          <Icon><AccountCircleOutlined /></Icon>
          Profile
        </NavLink>
        <Button>
          <Icon><ExitToAppRounded /></Icon>
          Logout
        </Button>
      </Container>
    </div>
  )
}

const Container = styled.div`
  padding-left: 35px;
`;

const Logo = styled.h1`
  color: #bb7b6b;
  font-family: 'Abril Fatface', cursive;
  font-weight: 400;
  font-size: 30px;
  margin-top: 15px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h3`
  font-size: 10px;
  font-weight: bold;
  color: #999;
  margin-top: 15px;
`;

const Icon = styled.div`
  margin-right: 10px;
`;

const Button = styled.div`
  display: flex;
`;

export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  margin-top: 15px;
  margin-bottom: 30px;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: #bb7b6b;
  }
`;

export default Sidebar;