import React from 'react'
import {AiFillHeart, AiOutlineHeart, AiOutlineMessage} from 'react-icons/ai';
import {IoPaperPlaneOutline} from 'react-icons/io5'
import { BsArchive } from "react-icons/bs";
import styled from 'styled-components';
import { useMutation } from 'react-query';
import { AddOrRemoveLike } from '../api/api';
import { ILikeAction } from '../../../types/PostType';
import { useDispatch } from 'react-redux';
import { addOrRemoveLike } from '../../../app/Reducers/Post/FollowersPostSlice';

const ReactionBarWrapper = styled.section`
display:flex;
justify-content: space-between;
padding: 10px 0px;
padding-bottom: 0;
`;

const ReactionBar : React.FC<ILikeAction> = (props) => {
    const dispatch = useDispatch()
    const mutateLike = useMutation(() => AddOrRemoveLike({userName: props.userName, postId: props.postId}))
    const onLikeClick = () =>{
        mutateLike.mutate()
        dispatch(addOrRemoveLike(props))
    }
    return (
        <ReactionBarWrapper>
            <div>
                {
                    props.likes.includes(props.userName) ? 
                    <AiFillHeart onClick={() => onLikeClick()} style={{cursor: 'pointer'}} size={30}/>
                    :
                    <AiOutlineHeart onClick={() => onLikeClick()} style={{cursor: 'pointer'}} size={30}/>
                }
            <AiOutlineMessage style={{margin: "0px 8px"}} size={30}/>
            <IoPaperPlaneOutline size={30}/>
            </div>
            <BsArchive size={30}/>
        </ReactionBarWrapper>
    )
}

export default ReactionBar
