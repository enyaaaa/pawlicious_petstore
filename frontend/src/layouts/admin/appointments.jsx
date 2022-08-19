import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";

import Navbar from '../../components/admin/navbar'
import Sidebar from "../../components/admin/sidebar";

const adminappointments = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get(`api/services`).then(({ data }) => {
            setServices(data);
        })
    }, [setServices])

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'serviceType', headerName: 'Service Type', width: 110 },
        { field: 'furPetName', headerName: 'Fur Pet Name', width: 110 },
        { field: 'email', headerName: 'Email', width: 110 },
        { field: 'mobile', headerName: 'Mobile', width: 90 },
        { field: 'appointmentDate', headerName: 'Appointment Date', width: 200 },
        { field: 'appointmentTime', headerName: 'Appointment Time', width: 200 },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/admin/editproduct/" + params.row.id}>
                            <Edit>Edit</Edit>
                        </Link>
                        <DeleteOutline
                            className="productListDelete"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },

    ];

    return (
        <Container>
            <Side>
                <Sidebar />
            </Side>
            <Top>
                <Navbar />
                <Main>
                    <Header>
                        <Title>SERVICES</Title>
                    </Header>
                    <div style={{ height: 579, width: '100%' }}>
                        <DataGrid
                            rows={services}
                            columns={columns}
                            pageSize={9}
                            rowsPerPageOptions={[9]}
                            checkboxSelection
                        />
                    </div>
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
    padding: 30px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 400;
`;

const NavLink = styled(Link)`
    font-size: 20px;
    color: black;
    cursor: pointer;
    border-radius: 20px;
    border: none;
    text-decoration: none;
    &:hover {
    color: #d6b0a6;
`;

const Image = styled.img`
    width: 45px;
    height: 45px;
    object-fit: cover;
    align-items: center;
`;

const Edit = styled.button`
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #d6b0a6;
    color: white;
    cursor: pointer;
    margin-right: 20px;
`;



export default adminappointments;