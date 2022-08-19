import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";

import Navbar from '../../components/admin/navbar'
import Sidebar from "../../components/admin/sidebar";

const adminorders = () => {

    //using state
    const [orders, setOrders] = useState([]);

    //getting all orders that users has made
    useEffect(() => {
        axios.get(`api/orders`).then(({ data }) => {
            setOrders(data);
        })
    }, [setOrders])

    //columns fieldsof orders
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'petType', headerName: 'Pet Type', width: 90 },
        { field: 'productCategory', headerName: 'Category', width: 90 },
        { field: 'productType', headerName: 'Product Type', width: 110 },
        {
            field: 'productImage', headerName: 'Image', width: 90, renderCell: (params) => {
                return (

                    <Image src={params.row.productImage} alt="" />

                );
            },
        },
        { field: 'productBrand', headerName: 'Brand', width: 90 },
        { field: 'productName', headerName: 'Name', width: 200 },
        { field: 'price', headerName: 'Price', width: 90 },
        { field: 'description', headerName: 'Description', width: 100 },
        { field: 'madeIn', headerName: 'Made In', width: 90 },
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