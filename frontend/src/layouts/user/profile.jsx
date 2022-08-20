import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

import Announcement from '../../components/user/announcement';
import Navbar from '../../components/user/navbar';
import Footer from '../../components/user/footer';

const profile = () => {

  // navigate users to another route
  const navigate = useNavigate();

  const [profile, setProfile] = useState([]);

  useEffect(() => {
    axios.get('/api/profile').then(res => {
      if (res.data.status === 200) {
        setProfile(res.data.profile);
      } else if (res.data.status === 401) {
        navigate('/login');
      }
    })
  }, [setProfile])


  const toEditProfile = () => {
    navigate("/editprofile", { state: profile })
  }

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
        {profile.map((item, idx) => {
          return (
            <Wrapper key={idx}>
              <Title>PROFILE</Title>
              <Item>
                <Imagepic src={`http://localhost:8000/images/profilepic/${item.profilePic}`} alt="No profile image" />
              </Item>
              <Item>
                <Label>username</Label>
                <Info>{item.username}</Info>
              </Item>
              <Item>
                <Label>email</Label>
                <Info>{item.email}</Info>
              </Item>
              <Item>
                <Label>mobile</Label>
                <Info>{item.mobile}</Info>
              </Item>
              <Actions>

                <Edit>
                  <Button onClick={() => { toEditProfile() }}>EDIT</Button>
                </Edit>

                <Logout>
                  <Button onClick={logoutSubmit}>LOGOUT</Button>
                </Logout>
              </Actions>
            </Wrapper>
          )
        })}
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
  width: 30%;
  background-color: rgba(255,255,255,.7);
  border-radius: 20px;
  text-align: center;
  padding:40px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
`;

const Imagepic = styled.img`
    height:150px;
    width: 150px;
    border-radius: 100%;
`;

const Info = styled.div`

`;

const Item = styled.div`
font-size: 20px;
margin-top: 10px;
`;

const Label = styled.div`
margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: rgb(151, 150, 150);
`;

const Actions = styled.div`
display:flex;
margin-left: 78px;
`;


const Edit = styled.div`
margin-right: 10px;
`;
const Logout = styled.div`
margin-left: 5px;
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