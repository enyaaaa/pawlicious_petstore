import React from 'react'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

import Announcement from '../../components/user/announcement';
import Navbar from '../../components/user/navbar';
import Footer from '../../components/user/footer';



const profile = () => {

  // navigate users to another route
  const navigate = useNavigate();

  //function when user click on logout
  const logoutSubmit = (e) => {
    e.preventDefault();

    axios.post(`/api/logout`).then(res => {
      if (res.data.status === 200) {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth_username');
        localStorage.removeItem('userid');
        localStorage.removeItem('email');
        localStorage.removeItem('mobile');
        localStorage.removeItem('roles');
        swal('Success', res.data.message, "success");
        navigate("/", { replace: true });
      }
    });
  }

  return (
    <div>
      <Announcement />
      <Navbar />
      <Container>
        <Wrapper>
          <Title>Profile</Title>
          <Item>
            <Label>Mobile</Label>
          </Item>
          <Item>
            <Label>Email</Label>
          </Item>
          <Title>
            <Button type='submit' onClick={logoutSubmit}>LOGOUT</Button>
          </Title>
        </Wrapper>
      </Container>
      <Footer />
    </div>
  )
}

const Container = styled.div`
  height: 88vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)), url("https://wichitamom.com/wp-content/uploads/2022/02/veterinarian-in-Wichita.png") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const Wrapper = styled.div`
  width: 90%;
  background-color: rgba(255,255,255,.7);
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  padding: 40px;

`;

const Title = styled.h1`
text-align: center;
  font-size: 24px;
  font-weight: 400;
`;

const Form = styled.form`
margin-left:30px;
display: flex;
flex-wrap: wrap;
`;

const Item = styled.div`
width: 600px;
display: flex;
flex-direction: column;
margin-top: 10px;
margin-right: 20px;
`;

const Label = styled.div`
margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: rgb(151, 150, 150);
`;

const Input = styled.input`
  min-width: 100%;
  padding: 10px;
`;

const Validation = styled.span`
    font-size: 12px;
    color: #b5968d;
`;

const Select = styled.select`
  padding: 12px;
`;

const Button = styled.button`
align-items: center;
margin-top: 30px;
width: 100px;
height: 50px;
padding: 10px;
font-size: 20px;
background-color: #d6b0a6;
cursor: pointer;
border-radius: 20px;
border: none;
text-decoration: none;
&:hover {
  color: #000;
}
`;

export default profile