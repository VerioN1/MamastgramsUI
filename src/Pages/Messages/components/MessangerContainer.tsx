import React from 'react'
import styled from 'styled-components'
import Contacts from './Contacts/Contacts';

const Container = styled.div`
display: flex;
border: 1px solid rgba(var(--b38,219,219,219),1);
height: 70vh;
width:77%;
margin: 5%;
`;

const MessangerContainer = () => {
    return (
        <Container>
            <Contacts/>
        </Container>
    )
}

export default MessangerContainer
