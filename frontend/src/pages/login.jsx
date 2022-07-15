import React, { useState } from 'react'
import styled from "styled-components";
import { NavLink as Link, useNavigate } from 'react-router-dom';
import axios from "axios";



const login = () => {

  let navigate = useNavigate();
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
          swal('Success', res.data.message, "success");
          navigate("/", {replace: true});

        } else if (res.data.status === 401) {
          swal('Warning', res.data.message, "warning")

        } else {
          setLogin({ ...loginInput, error_list: res.data.validation_errors });
        }
      });
    });
  }

  return (
    <Container>
      <Wrapper>
        <Title>LOGIN</Title>
        <Form onSubmit={loginSubmit}>
          <Input type="email" name="email" placeholder="email" onChange={handleInput} value={loginInput.email} />
          <span>{loginInput.error_list.email}</span>
          <Input type="password" name="password" placeholder="password" onChange={handleInput} value={loginInput.password} />
          <span>{loginInput.error_list.password}</span>
          <ForgetPasswowrdLink to="/">FORGET PASSWORD?</ForgetPasswowrdLink>
          <Button type="submit">SIGN IN</Button>
          <CreateAccountLink to="/register">CREATE ACCOUNT</CreateAccountLink>
        </Form>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 85vh;
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

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
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