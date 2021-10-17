import React from 'react'
import styled from 'styled-components';
import Contact from '../Contact/Contact';
import Header from './Header';

const ContactsWrapper = styled.div`
display: flex;
width: 35%;
border-right: 1px solid rgba(var(--b38,219,219,219),1);
flex-direction: column;
`;
const Contacts = () => {
    return (
        <ContactsWrapper>
            <Header/>
            <Contact/>
            <Contact/>
            <Contact/>
        </ContactsWrapper>
    )
}

export default Contacts
