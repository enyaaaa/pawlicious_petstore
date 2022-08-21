import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import product from "../../layouts/user/product";
import { SearchRounded } from "@material-ui/icons";

const products = () => {

  //navigate to another route
  const navigate = useNavigate();

  //using the type that the user has clicked
  const { type } = useParams();

  //set products
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');

  //getting products from api
  useEffect(() => {
    axios.get(`api/products/${type}`).then(({ data }) => {
      setProducts(data);
    })
  }, [type])

  //going in to view more details of product
  const goToProduct = (product) => {
    console.log(product);
    navigate(`/product/${type}/` + product.id, { state: product });
  }

  return (
    <div>
      <Search>
        <Icon><SearchRounded /></Icon>
        <Input type="text" placeholder="Search..." onChange={e => setQuery(e.target.value)} />
      </Search>
      <Container>
        {products.filter(product => product.productName.toLowerCase().includes(query)).map((product) => {
          return (
            <Card key={product.id}>
              <Imagecontainer>
                <Image onClick={() => { goToProduct(product) }} src={`http://localhost:8000/images/product/${product.productImage}`} />
              </Imagecontainer>
              <Brand>{product.productBrand}</Brand>
              <Name>{product.productName}</Name>
              <Price>${product.price}</Price>
              <Button onClick={() => { goToProduct(product) }}>VIEW PRODUCT</Button>
            </Card>
          )
        })}
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  position: relative;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Search = styled.div`
    justify-content: center;
    margin-left:40%;
    margin-top:20px;
    width:20%;
    display: flex;
    align-items: center;
    padding: 20px;
    background-color:#F7DDD7;   
    border-radius: 20px;
`;

const Input = styled.input`
    border: none;
    outline: none;
    background: transparent; 
`;

const Icon = styled.div`
    margin-right: 10px;
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