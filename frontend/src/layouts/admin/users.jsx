import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";

import Navbar from '../../components/admin/navbar'
import Sidebar from "../../components/admin/sidebar";

const adminUsers = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(`api/users`).then(({ data }) => {
            setUsers(data);
        })
    }, [setUsers])

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'profilePic', headerName: 'Profile Pic', width: 110, renderCell: (params) => {
                return (
                    <Image src={params.row.profilePic} alt="" />
                );
            },
        },
        { field: 'username', headerName: 'Username', width: 350 },
        { field: 'email', headerName: 'Email', width: 450 },
        { field: 'mobile', headerName: 'Mobile', width: 150 },
        {
            field: "action",
            headerName: "Action",
            width: 90,
            renderCell: (params) => {
                return (
                    <>
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
                    <Title>USERS</Title>
                    <div style={{ height: 579, width: '100%' }}>
                        <DataGrid
                            rows={users}
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

const Title = styled.h1`
    font-size: 24px;
    font-weight: 400;
`;

const Main = styled.div`
    padding: 30px;
`;

const Image = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    object-fit: cover;
    align-items: center;
`;


export default adminUsers;