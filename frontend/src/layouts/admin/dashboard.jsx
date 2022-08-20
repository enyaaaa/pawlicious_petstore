import React from "react";
import styled from "styled-components";

import Navbar from '../../components/admin/navbar'
import Sidebar from "../../components/admin/sidebar";

const adminDashboard = () => {
    return (
        <Container>
            <Side>
                <Sidebar />
            </Side>
            <Top>
                <Navbar />
                <Main>
                    <Item>
                        <Image src="https://media.istockphoto.com/vectors/remote-support-online-remotely-access-and-control-desktop-of-or-via-vector-id1135471958?k=20&m=1135471958&s=612x612&w=0&h=QyKqoO-7lCmFpbtG2fBWraaORLFVR31MIcSDqEudeng=" />
                        <Info>
                            <Title>WELCOME TO ADMIN</Title>
                        </Info>
                    </Item>
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

const Item = styled.div`
    flex: 1;
    margin: 3px;
    height: 60vh;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    opacity: 0.5;
    object-fit: cover;
`;


const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    color: black;
    text-align: center;
    font-size: 100px;
`;

export default adminDashboard;