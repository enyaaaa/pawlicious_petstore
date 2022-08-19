import React from "react";
import styled from "styled-components";

import { NotificationsNoneOutlined, PersonOutline, SearchRounded } from "@material-ui/icons";

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Search>
                    <Icon><SearchRounded /></Icon>
                    <Input type="text" placeholder="Search..." />
                </Search>
                <Item>
                    <Icon><NotificationsNoneOutlined /></Icon>
                    <Icon><PersonOutline /></Icon>
                </Item>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 15px;
`;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Icon = styled.div`
    margin-right: 10px;
`;

const Search = styled.div`
    display: flex;
    align-items: center;
    padding: 3px;   
`;

const Input = styled.input`
    border: none;
    outline: none;
    background: transparent; 
`;
const Item = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
`

export default Navbar;