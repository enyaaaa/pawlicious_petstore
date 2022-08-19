import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";

import Announcement from '../../components/user/announcement';
import Navbar from '../../components/user/navbar';
import Footer from '../../components/user/footer';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import swal from "sweetalert";

const shopcart = () => {

  const navigate = useNavigate();

  const [shoppingcart, setCart] = useState([]);

  var subtotalCartPrice = 0;
  var totalCartPrice = 0;

  if (!localStorage.getItem("auth_token")) {
    navigate('/login');
  }

  const isMounted = true;

  useEffect(() => {

    axios.get('/api/cart').then(res => {
      if (isMounted) {
        if (res.data.status === 200) {
          setCart(res.data.cart);
        } else if (res.data.status === 401) {
          navigate('/');
          swal('Warning', res.data.message, 'error')
        }
      }
    })
  }, [navigate])

  const handleDecrement = (cardId) => {
    setCart(cart => cart.map((item) => cardId === item.id ? { ...item, productQty: item.productQty - (item.productQty > 1 ? 1 : 0) } : item));
    updateCaryQty(cardId, 'dec');
  }

  const handleIncrement = (cardId) => {
    setCart(cart => cart.map((item) => cardId === item.id ? { ...item, productQty: item.productQty + (item.productQty < 10 ? 1 : 0) } : item))
    updateCaryQty(cardId, 'inc');
  }

  function updateCaryQty(cardId, scope) {
    axios.put(`/api/cartUpdateQty/${cardId}/${scope}`).then(res => {
      if (res.data.status === 200) {
        /* swal("Success", res.data.message,'success') */
      }
    })
  }

  const deleteCartItem = (e, cartId) => {
    e.preventDefault();

    const thisClicked = e.currentTarget;
    thisClicked.innerText = "Removing";

    axios.delete(`/api/deletecartitem/${cartId}`).then(res => {
      if (res.data.status === 200) {
        swal('Success', res.data.message, 'success');
        thisClicked.closest('Product').remove();

      } else if (res.data.status === 404) {
        swal('Error', res.data.message, 'error');
        thisClicked.innerText = "Remove";
      }

    })
  }

  var cart_HTML = '';
  if (shoppingcart.length > 0) {
    cart_HTML =
      <Info>
        {shoppingcart.map((item, idx) => {
          subtotalCartPrice += item.product.price * item.productQty 
          totalCartPrice += item.product.price * item.productQty + (4)
          return (
            <Product key={idx}>
              <ProductDetail>
                <Image src={`http://localhost:8000/images/product/${item.product.productImage}`} />
                <Details>
                  <ProductBrand>{item.product.productBrand}</ProductBrand>
                  <ProductName>{item.product.productName}</ProductName>
                  <Delete onClick={(e) => deleteCartItem(e, item.id)} >Remove</Delete>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Remove onClick={() => handleDecrement(item.id)} />
                  <ProductAmount>{item.productQty}</ProductAmount>
                  <Add onClick={() => handleIncrement(item.id)} />
                </ProductAmountContainer>
                <ProductPrice>${item.product.price}</ProductPrice>
              </PriceDetail>
            </Product>
          )
        })}
      </Info>

  } else {
    cart_HTML = <Wrapper>
      <Title>YOUR CART IS EMPTY</Title>
    </Wrapper>
  }

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>YOUR CART</Title>
        <Bottom>
          {cart_HTML}
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>${subtotalCartPrice}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$4</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>${totalCartPrice}</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  margin-top: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const ProductBrand = styled.span`
  font-weight: bold;
  color: grey;
`;

const ProductName = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Delete = styled.button`
    width: 80px;
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #d6b0a6;
    color: white;
    cursor: pointer;
    margin-top: 40px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h3``;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #d6b0a6;
  color: white;
  font-weight: 600;
  border: none;
  border-radius:10px;
`;

export default shopcart;