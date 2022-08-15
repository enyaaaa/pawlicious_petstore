import React from "react";
import styled from "styled-components";

import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts';

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
                    <h1>I am Dashboard</h1>
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

export default adminDashboard;