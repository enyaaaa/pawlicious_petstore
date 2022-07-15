import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";

const cart = () => {
    return (
        <Container>
            <Wrapper>
                <Title>YOUR CART</Title>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://cdn.shopify.com/s/files/1/1149/5008/products/PetHolisticFreezeDriedCanineDuckRawDiet14oz_397g_170x.png?v=1653569149" />
                                <Details>
                                    <ProductBrand>Pet Holistic</ProductBrand>
                                    <ProductName>Pet Holistic Freeze Dried Canine Duck Raw Diet 14oz (397g)</ProductName>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>1</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$44.00</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$44</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$4.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$-4.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$44</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
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

const TopButton = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  &:hover {
    color: #bb7b6b;
  }
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

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 40vh;
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
export default cart;