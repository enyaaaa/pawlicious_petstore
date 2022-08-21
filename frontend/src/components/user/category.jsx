import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom';
import { mobile } from "../../responsive";

const category = () => {
    return (
        <div>
            <Header>Shop for your fur babies</Header>
            <Wrapped>
                <Container>
                    <Image src="https://www.supermarketnews.com/sites/supermarketnews.com/files/styles/article_featured_retina/public/Online%20pet%20food%20trends.jpg?itok=Lu_BcCAF8" />
                    <Info>
                        <Title>FOOD</Title>
                        <NavLink to='/products/Dog'>SHOW MORE</NavLink>
                    </Info>
                </Container>
                <Container>
                    <Image src="https://media.istockphoto.com/photos/accessories-for-cat-and-dog-on-blue-background-pet-care-and-training-picture-id1248454290?k=20&m=1248454290&s=170667a&w=0&h=b7DRkX0QMMLrlBkeNX4dQQvVZZgRZO2-CTSFyAoLjW8=" />
                    <Info>
                        <Title>ACCESSORIES</Title>
                        <NavLink to='/products/Dog'>SHOW MORE</NavLink>
                    </Info>
                </Container>
                <Container>
                    <Image src="https://sc04.alicdn.com/kf/H8f929211b7a1423d91dd37aa93daa6ad7/244211425/H8f929211b7a1423d91dd37aa93daa6ad7.jpg" />
                    <Info>
                        <Title>CLEANING & TOILETRIES</Title>
                        <NavLink to='/products/Dog'>SHOW MORE</NavLink>
                    </Info>
                </Container>
            </Wrapped>
        </div>
    );
};

const Header = styled.h1`
    margin-top: 20px;
    color: black;
    text-align: center;
`;

const Wrapped = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 60vh;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    opacity: 0.5;
    object-fit: cover;
    ${mobile({ height: "40vh" })}
`;


const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    color: black;
    text-align: center;
`;

const NavLink = styled(Link)`
    padding: 10px;
    font-size: 15px;
    color: black;
    background-color: #d6b0a6;
    cursor: pointer;
    border-radius: 20px;
    border: none;
    text-decoration: none;
    &:hover {
    color: #000;}
`;

export default category;
