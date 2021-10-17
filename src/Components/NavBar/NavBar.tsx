import axios from 'axios';
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router'
import { Button, Icon } from 'semantic-ui-react'
import styled from 'styled-components'
import Avatar from '../../app/components/Avatar/Avatar';
import { logout } from '../../app/Reducers/User/UserSlice';
import { RootState } from '../../app/store';
import SearchEngine from './SearchEngine/SearchEngine';

const Title = styled.h1`
&:hover {
    cursor: pointer;
  }
`;
const logoutPost = async() => {
    return await axios.post(`${process.env.REACT_APP_BACKEND_API}Auth/Logout`, {}, {withCredentials: true})
}
const NavBar = () => {
    const userData = useSelector((state: RootState) => state.userData);
    const dispatch = useDispatch()
    const logoutReq = useMutation(() => logoutPost(), {
        onSuccess: () => {
            dispatch(logout())
            history.push('/')
        }
    })
    const history = useHistory();
    return (
        <nav className="nav-bar">
            <Title onClick={() => history.push('/')}>MamasInstagram</Title>
            <SearchEngine />
            <div>
            <Button icon style={{background: 'transparent'}} onClick={() => history.push('/CreatePost')}>
            <Icon.Group >
      <Icon name='pen square' />
      <Icon corner name='add' />
    </Icon.Group>
    </Button>
            <Button icon style={{background: 'transparent'}} onClick={() => history.push('/DM')}>
    <Icon name='comments outline' />
    </Button>
            <Button icon style={{background: 'transparent'}} onClick={() => history.push('/')}>
    <Icon name='home' />
  </Button>
            <Button icon style={{background: 'transparent'}} onClick={() => logoutReq.mutate()}>
    <Icon name='sign-out' />
  </Button>
  <Button icon style={{background: 'transparent'}} onClick={() => history.push('/Profile')}>
  <Avatar picture={userData.avatar}/>
  </Button>
            </div>
        </nav>
    )
}

export default NavBar
