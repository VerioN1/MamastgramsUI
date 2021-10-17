import React from 'react'
import styled from 'styled-components'
import Avatar from '../../../app/components/Avatar/Avatar';
import {BsThreeDots} from 'react-icons/bs';
import { Header as SemHeader, Popup, Grid } from 'semantic-ui-react';

const Button = styled.button`
  color: black;
  font-size: 1em;
  background-color: transparent;
  margin: 1em;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;
const HeaderWrapper = styled.div`
display: flex;
padding: 0px 8px;
justify-content:space-between;
align-items:center;
`;
interface HeaderProps {
    OPName : string,
    OPAvatar: string
}
const Header : React.FC<HeaderProps> = (props) => {
    return (
        <HeaderWrapper>
            <HeaderWrapper>
            <Avatar picture={props.OPAvatar}/>
            <p>{props.OPName}</p>
            </HeaderWrapper>
            <Popup trigger={<Button>
                <BsThreeDots/>
            </Button>} flowing hoverable>
            <Grid centered divided columns={1}>
      <Grid.Column textAlign='center'>
        <SemHeader as='h4'>Basic Plan</SemHeader>
        <p>
          <b>2</b> projects, $10 a month
        </p>
        <Button>Choose</Button>
      </Grid.Column>
    </Grid>
            </Popup>
        </HeaderWrapper>
    )
}

export default Header
