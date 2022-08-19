import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Announcement from '../../components/user/announcement';
import Navbar from '../../components/user/navbar';
import Footer from '../../components/user/footer';
import { useParams, useLocation } from "react-router-dom";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";
import axios from "axios";


const product = () => {

  const { id } = useParams();
  const location = useLocation();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`api/product/${id}`).then(({ data }) => {
      setProduct(data);
    })
  }, [setProduct])

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(
      addProduct({ product: location.state, quantity, price: location.state.price * quantity })
    );
  };

  console.log(location.state);
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
          <Price>${location.state.price}</Price>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
          </AddContainer>
          <Button onClick={handleClick}>ADD TO CART</Button>
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
  flex: 1;
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