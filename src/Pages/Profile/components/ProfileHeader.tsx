import React from 'react'
import { useSelector } from 'react-redux';
import { Button, Image } from 'semantic-ui-react'
import styled from 'styled-components'
import { RootState } from '../../../app/store';

const HeaderWrapper = styled.div`
 display: flex;
width: 70%;
`;
const DetailsWrapper = styled.div`
flex: 6 1 0%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 70%;
`;
const FlexWrapper = styled.ul`
display: flex;
list-style: none;
width: 70%;
`;
const LiWrapper = styled.li`
font-size: 16px;
margin-right: 2rem;
`;
const Bold = styled.span`
font-weight: bold;
`;
const ProfileHeader = () => {
    const userData = useSelector((state: RootState) => state.userData);
    return (
        <HeaderWrapper>
            <Image style={{ padding: '40px', flex: '3'}} src={userData.avatar} size='small' circular />
            <DetailsWrapper>
            <FlexWrapper>
                <FlexWrapper style={{alignItems: 'lex-start', flexDirection: 'column'}}>
            <h2 style={{marginRight: "1rem"}}>{userData.userName}</h2>
            <h3>{userData.personalName}</h3>
                </FlexWrapper>
            <Button basic compact size="small" style={{height: '70%', fontWeight: 'bold'}}>Edit Profile</Button>
            </FlexWrapper>
            <FlexWrapper>
                <LiWrapper>
                <Bold>{userData.posts.length}</Bold><span> posts</span>
                </LiWrapper>
                <LiWrapper>
                <Bold>{userData.followers.length}</Bold><span> followers</span>
                </LiWrapper>
                <LiWrapper>
                <Bold>{userData.followings.length}</Bold><span> following</span>
                </LiWrapper>
            </FlexWrapper>

            </DetailsWrapper>
        </HeaderWrapper>
    )
}

export default ProfileHeader
