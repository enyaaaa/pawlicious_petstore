import React, { useState } from 'react'
import styled from "styled-components";
import { NavLink as Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import axios from "axios";

import Announcement from '../../components/user/announcement';
import Navbar from '../../components/user/navbar';
import Footer from '../../components/user/footer';



const login = () => {

  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [loginInput, setLogin] = useState({
    email: '',
    password: '',
    error_list: [],
  })

  const handleInput = (e) => {
    e.persist();
    setLogin({ ...loginInput, [e.target.name]: e.target.value });
  }

  const loginSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: loginInput.email,
      password: loginInput.password,
    }

    axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post(`api/login`, data).then(res => {
        if (res.data.status === 200) {
          localStorage.setItem('auth_token', res.data.token);
          localStorage.setItem('auth_username', res.data.username);
          localStorage.setItem('roles', res.data.roles);
          const token = res?.data?.token;
          const roles = res?.data?.roles;
          console.log(res.data);
          setAuth({roles, token});
          swal('Success', res.data.message, "success");
          navigate(from, { replace: true });

        } else if (res.data.status === 401) {
          swal('Warning', res.data.message, "warning")

        } else {
          setLogin({ ...loginInput, error_list: res.data.validation_errors });
        }
      });
    });
  }

  return (
    <div>
      <Announcement />
      <Navbar />
      <Container>
        <Wrapper>
          <Title>LOGIN</Title>
          <Form onSubmit={loginSubmit}>
            <Input type="email" name="email" placeholder="email" onChange={handleInput} value={loginInput.email} />
            <Validation>{loginInput.error_list.email}</Validation>
            <Input type="password" name="password" placeholder="password" onChange={handleInput} value={loginInput.password} />
            <Validation>{loginInput.error_list.password}</Validation>
            <ForgetPasswowrdLink to="/">FORGET PASSWORD?</ForgetPasswowrdLink>
            <Button type="submit">SIGN IN</Button>
            <CreateAccountLink to="/register">CREATE ACCOUNT</CreateAccountLink>
          </Form>
        </Wrapper>
      </Container>
      <Footer />
    </div>
  );
};

const Container = styled.div`
  width: 100%;
  height: 90vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)), url("https://wichitamom.com/wp-content/uploads/2022/02/veterinarian-in-Wichita.png") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 400px;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Validation = styled.span`
font-size: 12px;
color: #b5968d;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  border-radius: 10px;
  background-color: #d6b0a6;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const ForgetPasswowrdLink = styled(Link)`
  color: black;
  margin-left: 229px;
  font-size: 12px;
  text-decoration: none;
  cursor: pointer;
`;

const CreateAccountLink = styled(Link)`
  color: black;
  font-size: 12px;
  text-decoration: none;
  cursor: pointer;
`;
export default login;