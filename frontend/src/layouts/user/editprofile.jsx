import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

import Announcement from '../../components/user/announcement';
import Navbar from '../../components/user/navbar';
import Footer from '../../components/user/footer';



const editprofile = () => {

    // navigate users to another route
    const navigate = useNavigate();
    const location = useLocation();

    const [img, setImg] = useState();
    const [error_list, setError] = useState([]);

    function onImageChange(e) {
        console.log(e.target.files);
        setImg(e.target.files[0])
    }

    //input of forms
    const [formData, setFormData] = useState({
        username: location.state[0].username,
        mobile: location.state[0].mobile,
        profilePic: location.state[0].profilePic,
    },[]);

    //handle users input
    const handleInput = (e) => {
        e.persist();
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }


    //function when user press on the submit button and edit the product and update on database
    const profileUpdate = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('username', formData.username);
        data.append('mobile', formData.mobile);
        data.append('profilePic', img);

        axios.post(`/api/updateprofile`, data).then(res => {
            if (res.data.status === 200) {
                swal("Success", res.data.message, "success");
                setError([]);
                navigate('/profile', { replace: true });
            }
            else if (res.data.status === 404) {
                setError(res.data.validation_errors);

            } else if (res.data.status === 422) {
                swal("Error", res.data.message, "error");
                navigate('/profile', { replace: true });
            }
        });
    }

    return (
        <div>
            <Announcement />
            <Navbar />
            <Container>
                <Wrapper>
                    <Title>UPDATE PROFILE</Title>
                    <Form onSubmit={profileUpdate} enctype="multipart/form-data">
                        <Item>
                            <Imagepic src={`http://localhost:8000/images/profilepic/${location.state[0].profilePic}`} alt="No profile image" />
                            <Image type="file" name='profilePic' onChange={onImageChange} />

                        </Item>
                        <Validation>{error_list.profilePic}</Validation>
                        <Item>
                            <Label>username</Label>
                            <Input type="text" name='username' id="username" placeholder="username" defaultValue={location.state[0].username} onChange={handleInput} />
                        </Item>
                        <Validation>{error_list.username}</Validation>
                        <Item>
                            <Label>mobile</Label>
                            <Input type="text" name='mobile' id="mobile" placeholder="mobile number" defaultValue={location.state[0].mobile} onChange={handleInput} />
                        </Item>
                        <Validation>{error_list.mobile}</Validation>
                    </Form>
                    <Edit>
                        <Button onClick={profileUpdate}>SAVE</Button>
                    </Edit>
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

const Form = styled.form`
`;

const Imagepic = styled.img`
    height:150px;
    width: 150px;
    border-radius: 100%;
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

const Input = styled.input`
    min-width: 40%;
    padding: 10px;
`;

const Validation = styled.span`
    font-size: 12px;
    color: #b5968d;
`;

const Image = styled.input`
    margin-top: 20px;
    margin-left: 40px;
`;

const Edit = styled.div`
margin-right: 10px;
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

export default editprofile