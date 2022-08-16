import React from 'react'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

import Announcement from '../../components/user/announcement';
import Navbar from '../../components/user/navbar';
import Footer from '../../components/user/footer';



const profile = () => {

    const navigate = useNavigate();
    const logoutSubmit = (e) => {
        e.preventDefault();

        axios.post(`/api/logout`).then(res => {
            if (res.data.status === 200) {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_username');
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
            <Button type='submit' onClick={logoutSubmit}>LOGOUT</Button>
            <Footer />
        </div>

    )
}

const Button = styled.button`
    padding: 10px;
    font-size: 10px;
    color: white;
    background-color: #d6b0a6;
    cursor: pointer;
    border-radius: 20px;
    border: none;
`
export default profile