import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";

import Navbar from '../../components/admin/navbar'
import Sidebar from "../../components/admin/sidebar";
import axios from "axios";
import swal from "sweetalert";

const adminProducts = () => {

    //using state
    const [products, setProducts] = useState([]);

    //getting products from database
    useEffect(() => {
        axios.get(`api/products`).then(({ data }) => {
            setProducts(data);
        })
    }, [setProducts])

    //function when user press on delete
    const handleDelete = (e, id) => {
        e.preventDefault();
        const thisClicked = id.currentTarget;

        axios.delete(`/api/products/${id}`).then(res => {
            if (res.data.status === 200) {
                swal("Success", res.data.message, "success");
                thisClicked.closest('roles').remove();
            }
            else if (res.data.status === 404) {
                swal("Error", res.data.message, "error");
            }
        })

    }

    //column fields
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'petType', headerName: 'Pet Type', width: 90 },
        { field: 'productCategory', headerName: 'Category', width: 90 },
        { field: 'productType', headerName: 'Product Type', width: 110 },
        {
            field: 'productImage', headerName: 'Image', width: 90, renderCell: (params) => {
                return (
                    <Image src={`http://localhost:8000/images/product/${params.row.productImage}`} alt="" />
                );
            },
        },
        { field: 'productBrand', headerName: 'Brand', width: 90 },
        { field: 'productName', headerName: 'Name', width: 190 },
        { field: 'price', headerName: 'Price', width: 90 },
        { field: 'description', headerName: 'Description', width: 100 },
        { field: 'suitability', headerName: 'Suitability', width: 90 },
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
                            onClick={(e) => handleDelete(e, params.row.id)}
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
                        <Title>PRODUCTS</Title>
                        <NavLink to='/admin/addproduct'>add products</NavLink>
                    </Header>
                    <div style={{ height: 579, width: '100%' }}>
                        <DataGrid
                            rows={products}
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



export default adminProducts;