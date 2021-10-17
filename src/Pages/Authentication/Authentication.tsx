import React from 'react'
import { useQuery } from 'react-query';
import styled from 'styled-components'
import Login from './Login/Login';
import Register from './Register/Register';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../../app/Reducers/User/UserSlice';
import FullScreenLoader from '../../Components/FullScreenLoader/FullScreenLoader';
const FormWrapper = styled.div`
    display:flex;
    margin-top: 5rem;
    width: 70%;
    border: solid 1px;
    justify-content: space-around;
    padding: 2rem;
`;
const authRequest = () => {
    return axios.get(`${process.env.REACT_APP_BACKEND_API}Auth/LoginJWT`, {withCredentials: true})
  }

const Authentication = () => {
    const  dispatch = useDispatch()
    const jwtAuth = useQuery('cookieAuth', authRequest, {
        retry: false,
        refetchOnWindowFocus: false,
        onSuccess: (res : any) =>{
          if(res.data){
            dispatch(login({
              userName: res.data.userName,
              avatar: `${process.env.REACT_APP_BACKEND_API}usersAvatars/${res.data.avatar}`,
              posts: res.data.posts,
              followers: res.data.followers,
              followings: res.data.followings,
              personalName: res.data.personalName,
              isAuth: true,
            }));
          }
        } 
      })
    if(jwtAuth.isLoading){
        return(
            <FullScreenLoader/>
        )
    }
    return (
        <div className="main-layout">
            <h1>Mamas Instagram</h1>
            <FormWrapper>
                <Login/>
                <Register/>
            </FormWrapper>
        </div>
    )
}

export default Authentication
