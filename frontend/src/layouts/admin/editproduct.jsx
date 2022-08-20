import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import Navbar from '../../components/admin/navbar';
import Sidebar from '../../components/admin/sidebar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';

const editproduct = () => {

    //using states
    const [img, setImg] = useState();
    const [error_list, setError] = useState([]);

    //using params to find the id
    const { id } = useParams();

    //navigate users to a different route
    const navigate = useNavigate();

    //getting users image input
    function onImageChange(e) {
        console.log(e.target.files);
        setImg(e.target.files[0])
    }

    //input of forms
    const [formData, setFormData] = useState(
        {
            petType: "",
            productCategory: "",
            productType: "",
            productBrand: "",
            productName: "",
            price: "",
            description: "-",
            suitability: "",
            madeIn: "-",
        },
        []
    );

    //handle users input
    const handleInput = (e) => {
        e.persist();
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    //getting product id data
    useEffect(() => {
        axios.get(`api/product/${id}`).then(res => {
            if (res.data.status === 200) {
                console.log(res.data.product)
                setFormData(res.data.product);
            } else if (res.data.status === 404) {
                swal("Error", res.data.message, 'error');
                navigate('/admin/products', { replace: true });
            }
        });
    }, [id]);

    //function when user press on the submit button and edit the product and update on database
    const productUpdate = (e) => {

        e.preventDefault();
        const data = new FormData();
        data.append('petType', formData.petType);
        data.append('productCategory', formData.productCategory);
        data.append('productType', formData.productType);
        data.append('productBrand', formData.productBrand);
        data.append('productName', formData.productName);
        data.append('productImage', img);
        data.append('price', formData.price);
        data.append('description', formData.description);
        data.append('suitability', formData.suitability);
        data.append('madeIn', formData.madeIn);

        axios.post(`/api/updateproduct/${id}`, data).then(res => {
            if (res.data.status === 200) {
                swal("Success", res.data.message, "success");
                setError([]);
                navigate('/admin/products', { replace: true });
            }
            else if (res.data.status === 404) {
                setError(res.data.validation_errors);

            } else if (res.data.status === 422) {
                swal("Error", res.data.message, "error");
                navigate('/admin/products', { replace: true });
            }
        });
    }

    return (
        <Container>
            <Side>
                <Sidebar />
            </Side>
            <Top>
                <Navbar />
                <Main>
                    <Wrapper>
                        <Title>EDIT PRODUCT</Title>
                        <Form onSubmit={productUpdate} enctype="multipart/form-data" >
                            <Item>
                                <Label>Pet Type</Label>
                                <Select name="petType" id="petType" value={formData.petType} onChange={handleInput}>
                                    <option value="---">---</option>
                                    <option value="Dog">Dog</option>
                                    <option value="Cat">Cat</option>
                                    <option value="Small Pets">Small Pet</option>
                                </Select>
                                <Validation>{error_list.petType}</Validation>
                            </Item>
                            <Item>
                                <Label>Category</Label>
                                <Select name="productCategory" id="productCategory" value={formData.productCategory} onChange={handleInput}>
                                    <option value="--">---</option>
                                    <option value="Food">Food</option>
                                    <option value="Accessories">Accessories</option>
                                    <option value="Cleaning & Toiletries">Cleaning & Toiletries</option>
                                </Select>
                                <Validation>{error_list.productCategory}</Validation>
                            </Item>
                            <Item>
                                <Label>Product Type</Label>
                                <Select name="productType" id="productType" value={formData.productType} onChange={handleInput}>
                                    <option value="--">---</option>
                                    <option value="Dry Food">Dry Food</option>
                                    <option value="Wet Food">Wet Food</option>
                                    <option value="Leashes">Leashes</option>
                                    <option value="Toy">Toy</option>
                                    <option value="Collars">Collars</option>
                                    <option value="Bath">Bath</option>
                                    <option value="Pet Wipes">Pet Wipes</option>
                                </Select>
                                <Validation>{error_list.productType}</Validation>
                            </Item>
                            <Item>
                                <Label>Brand</Label>
                                <Select name="productBrand" id="productBrand" value={formData.productBrand} onChange={handleInput}>
                                    <option value="--">---</option>
                                    <option value="Supreme">Supreme</option>
                                    <option value="Absolute Holistic">Absolute Holistic</option>
                                    <option value="Awesome Pawsome">Awesome Pawsome</option>
                                    <option value="Absolute Bites">Absolute Bites</option>
                                    <option value="Zippypaws">Zippypaws</option>
                                    <option value="Furball Collective">Furball Collective</option>
                                    <option value="Zippypaws">Zippypaws</option>
                                    <option value="Puppia">Puppia</option>
                                </Select>
                                <Validation>{error_list.productBrand}</Validation>
                            </Item>
                            <Item>
                                <Label>Name</Label>
                                <Input type="text" name='productName' placeholder="Product name" value={formData.productName} onChange={handleInput} />
                                <Validation>{error_list.productName}</Validation>
                            </Item>
                            <Item>
                                <Label>Price</Label>
                                <Input type="text" name='price' placeholder="$$$" value={formData.price} onChange={handleInput} />
                                <Validation>{error_list.price}</Validation>
                            </Item>
                            <Item>
                                <Label>Description</Label>
                                <Textarea type="text" name='description' placeholder="123" value={formData.description} onChange={handleInput} />
                            </Item>
                            <Item>
                                <Label>Suitability</Label>
                                <Select name="suitability" id="active" value={formData.suitability} onChange={handleInput} >
                                    <option value="--">---</option>
                                    <option value="Puppy">Puppy</option>
                                    <option value="Kitten">Kitten</option>
                                    <option value="Adult">Adult</option>
                                    <option value="Senior">Senior</option>
                                    <option value="All Life Stages">All Life Stages</option>
                                </Select>
                                <Validation>{error_list.suitability}</Validation>
                            </Item>
                            <Item>
                                <Label>Made In</Label>
                                <Select name="madeIn" id="madeIn" value={formData.madeIn} onChange={handleInput} >
                                    <option value="--">---</option>
                                    <option value="USA">USA</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Canada">Canada</option>
                                    <option value="New Zealand">New Zealand</option>
                                </Select>
                            </Item>
                            <Item>
                                <Flex>
                                    <ImageItem>
                                        <Label>Image</Label>
                                        <Flex>
                                            <Imagepic src={`http://localhost:8000/images/product/${formData.productImage}`} alt="" />
                                            <Image type="file" name='productImage' onChange={onImageChange} />
                                        </Flex>
                                        <Validation>{error_list.productImage}</Validation>
                                    </ImageItem>
                                    <Button type="submit">UPDATE</Button>
                                </Flex>
                            </Item>
                        </Form>
                    </Wrapper>
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

const Wrapper = styled.div`
    width: 100%;
    background-color: white;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 400;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Item = styled.div`
    width: 600px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-right: 20px;
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

const Textarea = styled.textarea`
    height: 110px;
`;

const Select = styled.select`
    padding: 12px;
`;

const ImageItem = styled.div`
    width: 600px;
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    margin-top: -50px;
`;

const Image = styled.input`
    margin-left: 0px;
`;

const Imagepic = styled.img`
    height: 95px;
    width: 85px;
`;

const Button = styled.button`
    margin-top: -25px;
    height: 50px;
    width: 120px;
    font-size: 20px;
    color: white;
    background-color: #d6b0a6;
    cursor: pointer;
    border-radius: 20px;
    border: none;
    text-decoration: none;
    &:hover {
        color: #000;
    }
`;

const Flex = styled.div`
    display:flex;
`;



export default editproduct;