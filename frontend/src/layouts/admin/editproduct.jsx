import React, { useState } from 'react'
import styled from "styled-components";
import Navbar from '../../components/admin/navbar';
import Sidebar from '../../components/admin/sidebar';

const editproduct = () => {

    const [img, setImg] = useState();

    const onImageChange = (e) => {
        const [file] = e.target.files;
        setImg(URL.createObjectURL(file));
    };

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
                        <Form onSubmit={e => { onSubmit(e); }}>
                            <Item>
                                <Label>Pet Type</Label>
                                <Select onChange={e => onChange(e)}>
                                    <option value="--">---</option>
                                    <option value="Dog">Dog</option>
                                    <option value="Cat">Cat</option>
                                    <option value="SmallPets">Small Pet</option>
                                </Select>
                            </Item>
                            <Item>
                                <Label>Category</Label>
                                <Select onChange={e => onChange(e)}>
                                    <option value="--">---</option>
                                    <option value="Food">Food</option>
                                    <option value="Accessories">Accessories</option>
                                    <option value="CleaningandToiletries">Cleaning & Toiletries</option>
                                </Select>
                            </Item>
                            <Item>
                                <Label>Product Type</Label>
                                <Select onChange={e => onChange(e)}>
                                    <option value="--">---</option>
                                    <option value="Dry">Dry Food</option>
                                    <option value="Wet">Wet Food</option>
                                    <option value="Leashes">Leashes</option>
                                    <option value="Collars">Collars</option>
                                    <option value="Bath">Bath</option>
                                    <option value="Petwipes">Pet Wipes</option>
                                </Select>
                            </Item>
                            <Item>
                                <Label>Brand</Label>
                                <Select onChange={e => onChange(e)}>
                                    <option value="--">---</option>
                                    <option value="Supreme">Supreme</option>
                                    <option value="AbsoluteHolistic">Absolute Holistic</option>
                                    <option value="TasteoftheWild">Taste of the Wild</option>
                                    <option value="AbsoluteBites">Absolute Bites</option>
                                </Select>
                            </Item>
                            <Item>
                                <Label>Name</Label>
                                <Input type="text" placeholder="Product name" onChange={e => onChange(e)} />
                            </Item>
                            <Item>
                                <Label>Price</Label>
                                <Input type="text" placeholder="$$$" onChange={e => onChange(e)} />
                            </Item>
                            <Item>
                                <Label>Description</Label>
                                <Textarea type="text" placeholder="123" onChange={e => onChange(e)} />
                            </Item>
                            <Item>
                                <Label>Suitability</Label>
                                <Select id="active" onChange={e => onChange(e)} >
                                    <option value="--">---</option>
                                    <option value="puppy">Puppy</option>
                                    <option value="kitten">Kitten</option>
                                    <option value="adult">Adult</option>
                                    <option value="senior">Senior</option>
                                    <option value="allages">All Ages</option>
                                </Select>
                            </Item>
                            <Item>
                                <Label>Made In</Label>
                                <Select id="madeIn" onChange={e => onChange(e)} >
                                    <option value="--">---</option>
                                    <option value="USA">USA</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Canada">Canada</option>
                                </Select>
                            </Item>
                            <ImageItem>
                                <Label>Image</Label>
                                <Image src={img} alt="" />
                                <Input type="file" onChange={ onImageChange } />
                                <Button type="submit">ADD</Button>
                            </ImageItem>
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

const Textarea = styled.textarea`
    height: 110px;
`;

const Select = styled.select`
    padding: 12px;
`;

const ImageItem = styled.div`
    margin-top: -35px;
`;

const Image = styled.img`
    height: 95px;
    width: 95px;
`;

const Button = styled.button`
    margin-left: 60px;
    height: 50px;
    width: 100px;
    padding: 10px;
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



export default editproduct