import React, { useState } from 'react'
import styled from "styled-components";
import { enGB } from 'date-fns/locale'
import { DatePicker } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import Navbar from '../../components/admin/navbar';
import Sidebar from '../../components/admin/sidebar';

const addappointment = () => {

    const [date, setDate] = useState()


    return (
        <Container>
            <Side>
                <Sidebar />
            </Side>
            <Top>
                <Navbar />
                <Main>
                    <Wrapper>
                        <Title>ADD APPOINTMENT</Title>
                        <Form>
                            <Item>
                                <Label>Service Type</Label>
                                <Select name="active" id="active">
                                    <option value="Dog">Dog</option>
                                    <option value="Cat">Cat</option>
                                </Select>
                            </Item>
                            <Item>
                                <Label>Appointment Date</Label>
                                <DatePicker date={date} onDateChange={setDate} locale={enGB}>
                                    {({ inputProps, focused }) => (
                                        <Input
                                            className={'input' + (focused ? ' -focused' : '')}
                                            {...inputProps}
                                        />
                                    )}
                                </DatePicker>
                            </Item>
                            <Item>
                                <Label>Fur Pet Name</Label>
                                <Input type="text" placeholder="Fur pet name" />
                            </Item>
                            <Item>
                                <Label>Appointment Time</Label>
                                <Select name="active" id="active">
                                    <option value="12:00">12:00pm</option>
                                    <option value="12:30">12:30pm</option>
                                    <option value="1:00">1:00pm</option>
                                    <option value="1:30">1:30pm</option>
                                    <option value="2:00">2:00pm</option>
                                    <option value="2:30">2:30pm</option>
                                    <option value="3:00">3:00pm</option>
                                    <option value="3:30">3:30pm</option>
                                    <option value="4:00">4:00pm</option>
                                    <option value="4:30">4:30pm</option>
                                    <option value="5:00">5:00pm</option>
                                </Select>
                            </Item>
                            <Item>
                                <Label>Mobile</Label>
                                <Input type="text" placeholder="Mobile" />
                            </Item>
                            <Item>
                                <Label>Email</Label>
                                <Input type="text" placeholder="Email" />
                            </Item>
                            <Button type="submit">ADD</Button>
                        </Form>
                    </Wrapper>
                </Main>
            </Top>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
`;

const Side = styled.div`
    flex: 1;
`;

const Top = styled.div`
    flex: 8;
`;

const Main = styled.div`
    padding: 30px;
`;

const Wrapper = styled.div`
  width: 100%;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
`;

const Form = styled.form`
display: flex;
flex-wrap: wrap;
`;

const Item = styled.div`
width: 600px;
display: flex;
flex-direction: column;
margin-top: 10px;
margin-right: 20px;
`;

const Label = styled.div`
margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: rgb(151, 150, 150);
`;

const Input = styled.input`
  min-width: 40%;
  padding: 10px;
`;

const Textarea = styled.textarea`
height: 110px;
`;

const Select = styled.select`
  padding: 12px;
`;

const Image = styled.img`
  height: 95px;
  width: 95px;
`;

const Button = styled.button`
margin-top: 30px;
margin-left: 535px;
height: 50px;
padding: 10px;
font-size: 20px;
color: white;
background-color: #d6b0a6;
cursor: pointer;
border-radius: 20px;
border: none;
text-decoration: none;
&:hover {
  color: #000;
}
`;



export default addappointment;