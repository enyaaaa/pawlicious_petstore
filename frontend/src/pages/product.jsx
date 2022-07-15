import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";



const product = () => {
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src="https://cdn.shopify.com/s/files/1/1149/5008/products/PetHolisticFreezeDriedCanineDuckRawDiet14oz_397g_170x.png?v=1653569149" />
        </ImgContainer>
        <InfoContainer>
          <Title>Pet Holistic Freeze Dried Canine Duck Raw Diet 14oz (397g)</Title>
          <Desc>
          Pet Holistic Freeze Duck are produced using only the freshest, human-grade ingredients which are free from antibiotics, steroids and added hormones This combination of ingredients offers optimum levels of the amino acids (protein), essential fatty acids, natural-occurring enzymes, and necessary vitamins and minerals that are the basic requirements for your pets healthy biological functions Our ingredients provide superior levels of amino and essential fatty acids along with optimum levels of calcium. Pet Holistic Freeze Duck allows you to give your canine friend all the benefits of a raw diet in a convenient freeze-dried form. The variety of ingredients mimics what the diet of animals in the wild are in a superior bio-available composition. It's grain and gluten-free, and doesn't contain any corn, wheat, or soy, making it great for dogs with sensitivities Our products are naturally preserved without the need for any synthetic preservatives.
          </Desc>
          <Price>$44</Price>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
          </AddContainer>
          <Button>ADD TO CART</Button>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 50vh;
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