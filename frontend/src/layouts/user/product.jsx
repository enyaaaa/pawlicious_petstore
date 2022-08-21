import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { useState } from "react";
import Announcement from '../../components/user/announcement';
import Navbar from '../../components/user/navbar';
import Footer from '../../components/user/footer';
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";


const product = () => {

  //use location to find state
  const location = useLocation();

  const {id} = useParams();

  //using state
  const [quantity, setQuantity] = useState(1);

  //handling decrement
  const handleDecrement = () => {
    if(quantity > 1){
      setQuantity(prevCount => prevCount - 1)
    }
  }

  //handling increment
  const handleIncrement = () => {
    if(quantity < 10){
      setQuantity(prevCount => prevCount + 1)
    }
  }

  const submitAddToCart = (e) => {
    e.preventDefault();

    const data = {
      productId: id, 
      productQty: quantity
    }

    axios.post(`/api/addtocart`, data).then(res => {
      if (res.data.status == 201){
        swal('Success', res.data.message, 'success');
      } else if (res.data.status === 409){
        //already added to cart
        swal('Success', res.data.message, 'success');
      } else if (res.data.status === 401){
        swal('Error', res.data.message, 'error');
      } else if (res.data.status === 404){
        swal('Warning', res.data.message, 'warning');
      }
    })
  }


  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={`http://localhost:8000/images/product/${location.state.productImage}`} />
        </ImgContainer>
        <InfoContainer>
          <Title>{location.state.productName}</Title>
          <Desc>{location.state.description}</Desc>
          <Desc>Category : {location.state.productCategory}</Desc>
          <Desc>Product Type : {location.state.productType}</Desc>
          <Desc>Suitability : {location.state.suitability}</Desc>
          <Desc>Made In : {location.state.madeIn}</Desc>
          <Price>${location.state.price}</Price>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={handleDecrement} />
              <Amount>{quantity}</Amount>
              <Add onClick={handleIncrement} />
            </AmountContainer>
          </AddContainer>
          <Button onClick={submitAddToCart}>ADD TO CART</Button>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 90px;
  display: flex;
 
`;

const ImgContainer = styled.div`
  flex: 0.4;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 0.5;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 8px;
  background-color: #d6b0a6;
  color: white;
  border: none;
  border-radius:10px;
`;

export default product;