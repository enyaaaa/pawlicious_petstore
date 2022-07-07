import React from 'react';
import styled from "styled-components";
import { Carousel } from 'react-bootstrap';

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  color: white;
  background-color: #d6b0a6;
  cursor: pointer;
  border-radius: 20px;
  border: none;
`;

const slider = () => {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="https://images2.minutemediacdn.com/image/upload/c_crop,w_2121,h_1193,x_0,y_220/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/mentalfloss/01g43ba134yjdqag8apv.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Cat Products</h3>
                    <p>Explore an extended range of cat care and gromming products!</p>
                    <Button>View More</Button>
                </Carousel.Caption>
                
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="https://www.rover.com/blog/wp-content/uploads/2019/12/iStock-1148207182-min-scaled-e1647883996179.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Dog Products</h3>
                    <p>Explore an extended range of dog care and grooming products!</p>
                    <Button>View More</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src="https://media-be.chewy.com/wp-content/uploads/2019/10/30160003/Food_Nutrition-Do-Treats-Have-a-Place-in-a-Healthy-Diet-1.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Book An Appointment Today</h3>
                    <p>We provide grooming services for your fur pets!</p>
                    <Button>View More</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default slider;