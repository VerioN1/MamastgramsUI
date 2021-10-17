import React from 'react'
import { IoCreate } from 'react-icons/io5';
import { BsChevronDown } from 'react-icons/bs'
import styled from 'styled-components'
import { Button } from 'semantic-ui-react';

const UserName = styled.p`
font-weight: bold;
margin: 0 0.5rem;
font-size: medium;
`;
const HeaderWrapper = styled.div`
display:flex;
width: 100%;
border-bottom: 1px solid rgba(var(--b38,219,219,219),1);
height: 10%;
padding: 0 10%;
justify-content: space-around;
align-items: center;
margin-bottom: 10px;
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <UserName>AlonBar</UserName>
            <Button icon style={{padding: 0, background: "transparent"}}>
              <BsChevronDown size={25}/>
            </Button>
            </div>
            
            <IoCreate size={30}/>
        </HeaderWrapper>
    )
}

export default Header
