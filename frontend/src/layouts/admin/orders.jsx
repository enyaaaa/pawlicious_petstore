import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Chip from '@mui/material/Chip';

import Navbar from '../../components/admin/navbar'
import Sidebar from "../../components/admin/sidebar";

const adminorders = () => {

    //using state
    const [orders, setOrders] = useState([]);

    //getting all orders that users has made
    useEffect(() => {
        axios.get(`api/addtocart`).then(({ data }) => {
            setOrders(data);
        })
    }, [setOrders])

    //columns fieldsof orders
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'userId', headerName: 'User Id', width: 90 },
        { field: 'productId', headerName: 'Product Id', width: 90 },
        { field: 'productQty', headerName: 'Product Qty', width: 110 },
        { field: 'created_at', headerName: 'Created', width: 115 },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Chip label="success" color="success" variant="outlined" />
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
                    <Title>Orders</Title>
                    <div style={{ height: 579, width: '100%' }}>
                        <DataGrid
                            rows={orders}
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



export default adminorders;