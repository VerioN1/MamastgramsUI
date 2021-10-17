import React from 'react'
import styled from 'styled-components'
import Avatar from '../../../../app/components/Avatar/Avatar'

const ContactWrapper = styled.div`
display: flex;
padding: 10px 15px;
justify-content: space-evenly;
align-items:center;
&:hover {
    background:  rgba(var(--bb2,239,239,239),1);
    cursor: pointer;
  }
`;
const ContactMetaDataWrapper = styled.div`
display: flex;
    text-align: initial;
    flex-direction: column;
    `;
const Contact = () => {
    return (
        <ContactWrapper>
            <Avatar/>
            <ContactMetaDataWrapper>
                <p style={{margin: 0}}>til til</p>
                <p>Sent you a message ± 3h ago</p>
            </ContactMetaDataWrapper>
        </ContactWrapper>
    )
}

export default Contact
