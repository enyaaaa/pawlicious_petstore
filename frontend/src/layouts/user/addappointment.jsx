import React, { useState } from 'react'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import 'react-nice-dates/build/style.css'
import axios from 'axios';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';

import Announcement from '../../components/user/announcement';
import Navbar from '../../components/user/navbar';
import Footer from '../../components/user/footer';

const addappointment = () => {

    //using state
    const [date, setDate] = useState('')
    const [error_list, setError] = useState([]);

    /* const [value, setValue] = useState('') ; */

    //navigate users to a different route
    const navigate = useNavigate();

    //input fields
    const [formData, setFormData] = useState(
        {
            serviceType: "",
            petType: "",
            breed: "",
            furPetName: "",
            email: "",
            mobile: "",
            appointmentDate: "",
            appointmentTime: "",
        },
        []
    );

    //handing users input
    const handleInput = (e) => {
        e.persist();
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    //function when users book appointment and store it into database
    const appointmentSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('userId', localStorage.getItem('userid'));
        data.append('serviceType', formData.serviceType);
        data.append('petType', formData.petType);
        data.append('breed', formData.breed);
        data.append('furPetName', formData.furPetName);
        data.append('email', localStorage.getItem('email'));
        data.append('mobile', localStorage.getItem('mobile'));
        data.append('appointmentDate', date);
        data.append('appointmentTime', formData.appointmentTime);

        axios.post(`/api/services`, data).then(res => {
            if (res.data.status === 200) {
                swal("Success", res.data.message, "success");
                setFormData({
                    ...formData,
                    userId: localStorage.getItem('userid'),
                    serviceType: "",
                    petType: "",
                    breed: "",
                    email: localStorage.getItem('email'),
                    mobile: localStorage.getItem('mobile'),
                    appointmentDate: "",
                    appointmentTime: "",
                })
                setError([]);
                navigate('/profile', { replace: true });
            }
            else {
                setError(res.data.validation_errors);
            }
        }, [setFormData]);
    }

    return (
        <div>
            <Announcement />
            <Navbar />
            <Container>
                <Wrapper>
                    <Title>ADD APPOINTMENT</Title>
                    <Form>
                        <Item>
                            <Label>Service Type</Label>
                            <Select name="serviceType" id="serviceType" value={formData.serviceType} onChange={handleInput}>
                                <option value="---">---</option>
                                <option value="Grooming">Grooming</option>
                                <option value="Bath">Bath</option>
                                <option value="Treatments">Treatments</option>
                            </Select>
                            <Validation>{error_list.serviceType}</Validation>
                        </Item>
                        <Item>
                            <Label>Pet Type</Label>
                            <Select name="petType" id="petType" value={formData.petType} onChange={handleInput}>
                                <option value="---">---</option>
                                <option value="Dog">Dog</option>
                                <option value="Cat">Cat</option>
                                <option value="Small Pets">Small Pets</option>
                            </Select>
                            <Validation>{error_list.petType}</Validation>
                        </Item>
                        <Item>
                            <Label>Breed</Label>
                            <Input type="text" placeholder="Breed" name="breed" id="breed" value={formData.breed} onChange={handleInput} />
                            <Validation>{error_list.breed}</Validation>
                        </Item>
                        <Item>
                            <Label>Appointment Date</Label>
                            {/* <DatePicker onDateChange={setDate} date={date} locale={enGB}  >
                                {({ inputProps, focused }) => (
                                    <Input name="appointmentDate" value={date} 
                                        className={'input' + (focused ? ' -focused' : '')}
                                        {...inputProps}
                                    />
                                )}
                            </DatePicker> */}
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Custom input"
                                    value={date}
                                    onChange={(newValue) => {
                                        setDate(newValue);
                                    }}
                                    renderInput={({ inputRef, inputProps, InputProps }) => (
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Input ref={inputRef} {...inputProps} />
                                            {InputProps?.endAdornment}
                                        </Box>
                                    )}
                                />
                            </LocalizationProvider>
                            <Validation>{error_list.appointmentDate}</Validation>
                        </Item>
                        <Item>
                            <Label>Fur Pet Name</Label>
                            <Input type="text" placeholder="Fur pet name" name="furPetName" id="furPetName" value={formData.furPetName} onChange={handleInput} />
                        </Item>
                        <Item>
                            <Label>Appointment Time</Label>
                            <Select name="appointmentTime" id="appointmentTime" value={formData.appointmentTime} onChange={handleInput}>
                                <option value="---">---</option>
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
                            <Validation>{error_list.appointmentTime}</Validation>
                        </Item>
                        <Item>
                            <Label>Mobile</Label>
                            <Input type="text" placeholder="Mobile" disabled={true} name="mobile" id="mobile" value={localStorage.getItem('mobile')} />
                            <Validation>{error_list.mobile}</Validation>
                        </Item>
                        <Item>
                            <Label>Email</Label>
                            <Input type="text" placeholder="Email" disabled={true} name="email" id="email" value={localStorage.getItem('email')} />
                            <Validation>{error_list.email}</Validation>
                        </Item>

                    </Form>
                    <Title>
                        <Button onClick={appointmentSubmit}>ADD</Button>
                    </Title>
                </Wrapper>
            </Container>
            <Footer />
        </div>
    )
}

const Container = styled.div`
    height: 88vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)), url("https://wichitamom.com/wp-content/uploads/2022/02/veterinarian-in-Wichita.png") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
  
`;

const Wrapper = styled.div`
    width: 90%;
    background-color: rgba(255,255,255,.7);
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    padding: 40px;

`;

const Title = styled.h1`
    text-align: center;
    font-size: 24px;
    font-weight: 400;
`;

const Form = styled.form`
    margin-left:30px;
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
    min-width: 100%;
    padding: 10px;
`;

const Validation = styled.span`
    font-size: 12px;
    color: #b5968d;
`;

const Select = styled.select`
    padding: 12px;
`;

const Button = styled.button`
    align-items: center;
    margin-top: 30px;
    width: 100px;
    height: 50px;
    padding: 10px;
    font-size: 20px;
    background-color: #d6b0a6;
    cursor: pointer;
    border-radius: 20px;
    border: none;
    text-decoration: none;
`;

export default addappointment;