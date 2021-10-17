import React from 'react'
import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { useAppSelector } from '../../app/hooks'
import { setFollowersPosts } from '../../app/Reducers/Post/FollowersPostSlice'
import FullScreenLoader from '../../Components/FullScreenLoader/FullScreenLoader'
import Post from '../../Components/Post/Post'
import { IPost } from '../../types/PostType'
import { getAllPosts } from './api/api'

const NoContentWrapper = styled.div`
display: flex;
height: 100vh;
width: 100%;
justify-content: center;
align-items:center;
`;

const Home = () => {
    const dispatch = useDispatch()
    const postsState = useAppSelector(state => state.FollowersPosts)
    const postsQuery = useQuery(['allPosts'], () => getAllPosts(), {
        onError: (e) => console.log(e),
        onSuccess: (data) => {
            dispatch(setFollowersPosts(data))
        }
    })
    if(postsQuery.isLoading){
        return(
            <FullScreenLoader/>
        )
    }
    if(postsQuery.isSuccess && postsQuery.data.length !== 0){
        return (
            <div className="main-layout">
                {postsState.map((postData : IPost) => (
                    <Post key={postData._id} postData={postData}/>
                ))}
            </div>
        )    
    }
    return (
        <div className="main-layout">
            <NoContentWrapper>
                <p>Start Following To See Content</p>
            </NoContentWrapper>
        </div>
    )
}

export default Home
