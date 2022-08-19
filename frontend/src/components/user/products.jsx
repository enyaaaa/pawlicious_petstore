import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import axios from "axios";

const products = () => {

  const navigate = useNavigate();

  const { type } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`api/products/${type}`).then(({ data }) => {
      setProducts(data);
    })
  }, [type])

  const goToProduct = (product) => {
    console.log(product);
    navigate(`/product/${type}/` + product.id, { state: product });
  }

  return (
    <Container>
      {products.map((product) => {
        return (
          <Card key={product.id}>
            <Imagecontainer>
              <Image onClick={() => { goToProduct(product) }} src={`http://localhost:8000/images/product/${product.productImage}`} />
            </Imagecontainer>
            <Brand>{product.productBrand}</Brand>
            <Name>{product.productName}</Name>
            <Price>${product.price}</Price>
            <Button>ADD TO CART</Button>
          </Card>
        )
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: relative;
  box-sizing: border-box;
  justify-content: center;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width:350px;
  display: flex;
  flex-direction:column;
  position:relative;
  transform: scale(0.8);
  transition:all 0.3s ease-in-out;
`;

const Imagecontainer = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

const Image = styled.img`
  height:300px;
  width: 250px;
  border-radius: 15px;
  margin-bottom: 20px;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const Brand = styled.h3`
  display:flex;
  color: grey;
  font-size: 20px;
  font-weight: bold;
`;

const Name = styled.h2`
  font-size: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`;
const Price = styled.h3`
  font-size: 25px;
  color: #bb7b6b;
`;
const Button = styled.button`
  height: 60px;
  border-radius: 10px;
  border: none;
  background-color: #d6b0a6;
  color: white;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export default products;