import axios from "axios"
import styled from "styled-components";
import { NavLink as Link, useNavigate} from 'react-router-dom';
import React, { useState } from "react";
import swal from 'sweetalert';

const register = () => {

  const navigate = useNavigate();
  const [registerInput, setRegister] = useState({
    username: '',
    email: '',
    password: '',
    confirmpassword: '',
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setRegister({ ...registerInput, [e.target.name]: e.target.value})
  }

  const registerSubmit = (e) => {
    e.preventDefault();

    const data = {
      username: registerInput.username,
      email: registerInput.email,
      password: registerInput.password,
      confirmpassword: registerInput.confirmpassword,
    }

    axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post(`/api/register`, data).then(res => {
        if (res.data.status === 200) {
          localStorage.setItem('auth_token', res.data.token);
          localStorage.setItem('auth_username', res.data.username);
          swal("Success", res.data.message, "success");
          navigate('/login', { replace: true });
        }
        else {
          setRegister({ ...registerInput, error_list: res.data.validation_errors })
        }
      });
    });
  }

  return (
    <Container>
      <Wrapper>
        <Title>SIGN UP</Title>
        <Form onSubmit={registerSubmit}>
          <Input type="text" name="username" placeholder="username" onChange={handleInput} value={registerInput.username} />
          <span>{registerInput.error_list.username}</span>
          <Input type="text" name="email" placeholder="email" onChange={handleInput} value={registerInput.email} />
          <span>{registerInput.error_list.email}</span>
          <Input type="password" name="password" placeholder="password" onChange={handleInput} value={registerInput.password} />
          <span>{registerInput.error_list.password}</span>
          <Input type="password" name="confirmpassword" placeholder="confirm password" onChange={handleInput} value={registerInput.confirmpassword} />
          <Button type="submit">REGISTER</Button>
          <LoginLink to="/login">AREADY HAVE AN ACCOUNT?</LoginLink>
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
  margin-top: 10px;
  margin-bottom: 10px;
`;

const LoginLink = styled(Link)`
  color: black;
  font-size: 12px;
  text-decoration: none;
  cursor: pointer;
`;

export default register;