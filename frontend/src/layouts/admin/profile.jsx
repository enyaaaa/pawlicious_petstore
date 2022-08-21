import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Navbar from '../../components/admin/navbar'
import Sidebar from "../../components/admin/sidebar";

const adminProfile = () => {

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
        navigate("/admin/editprofile", { state: profile })
    }

    return (
        <Container>
            <Side>
                <Sidebar />
            </Side>
            <Top>
                <Navbar />
                <Main>
                    <Items>
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
                                    <Edit>
                                        <Button onClick={() => { toEditProfile() }}>EDIT</Button>
                                    </Edit>
                            </Wrapper>
                        )
                    })}
                    </Items>
                </Main>
            </Top>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
`;

const Side = styled.div`
    flex: 1;
`;

const Top = styled.div`
    flex: 8;
`;

const Main = styled.div`
    padding: 50px;
`;

const Items = styled.div`
height: 80vh;
background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)), url("https://idsb.tmgrup.com.tr/ly/uploads/images/2021/11/17/160371.jpg") center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
border-radius: 20px;
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

const Edit = styled.div`
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

export default adminProfile;