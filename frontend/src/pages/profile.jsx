import React from 'react'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';



const profile = () => {

    const navigate = useNavigate();
    const logoutSubmit = (e) => {
        e.preventDefault();

        axios.post(`/api/logout`).then(res => {
            if (res.data.status === 200) {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_username');
                swal('Success', res.data.message, "success");
                navigate("/", {replace: true});
            }
        });
    }

    return (

        <div><Button type='submit' onClick={logoutSubmit}>LOGOUT</Button></div>

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