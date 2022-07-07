import styled from "styled-components";

const Title = styled.h1`
    margin-top: 20px;
    text-align: center;
`;

const Wrapped = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 60vh;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
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

const Button = styled.button`
    padding: 10px;
    font-size: 10px;
    color: white;
    background-color: #d6b0a6;
    cursor: pointer;
    border-radius: 20px;
    border: none;
`;

const category = () => {
    return (
        <div>
            <Title>Shop for your fur babies</Title>
            <Wrapped>
            <Container>
                <Image src="https://www.supermarketnews.com/sites/supermarketnews.com/files/styles/article_featured_retina/public/Online%20pet%20food%20trends.jpg?itok=Lu_BcCAF8" />
                <Info>
                    <Title>DRY FOOD</Title>
                    <Button>SHOW MORE</Button>
                </Info>
            </Container>
            <Container>
                <Image src="https://media.istockphoto.com/photos/accessories-for-cat-and-dog-on-blue-background-pet-care-and-training-picture-id1248454290?k=20&m=1248454290&s=170667a&w=0&h=b7DRkX0QMMLrlBkeNX4dQQvVZZgRZO2-CTSFyAoLjW8=" />
                <Info>
                    <Title>ACCESSORIES</Title>
                    <Button>SHOW MORE</Button>
                </Info>
            </Container>
            <Container>
                <Image src="https://trinityplumbingllc.com/wp-content/uploads/2020/12/pet-shower-dog-bath-luxury-plumbing-trinity-plumbing.jpg" />
                <Info>
                    <Title>CLEANING & TOILETRIES</Title>
                    <Button>SHOW MORE</Button>
                </Info>
            </Container>
        </Wrapped>
        </div>
    );
};

export default category;
