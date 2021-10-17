import React, { useState } from 'react'
import { AiOutlineSmile } from 'react-icons/ai';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { AddCommentToPost } from '../../../app/Reducers/comments/Comments';
import { AddComment, commentProps } from '../api/api';

const InputText = styled.input`
background: 0 0;
border:0;
color: #262626;
color: rgba(var(--i1d,38,38,38),1);
display: flex;
-webkit-box-flex: 1;
-webkit-flex-grow: 1;
flex-grow: 1;
font-size: inherit;
height: 18px;
max-height: 80px;
outline: 0;
padding: 0;
padding-left: 5px;
resize: none;
width: 80%;
`;
const InputWrapper = styled.div`
border-top: solid 1px #cecece;
display:flex;
align-items:center;
padding: 20px 0px;
`;
const PostButton = styled.button`
border: 0;
    color: rgba(var(--d69,0,149,246),1);
    display: inline;
    padding: 0;
    font-weight: bold;
    background-color: transparent;
    position: relative;
    cursor:pointer;
`;
export interface CreateCommentProps{
    postId: string;
    OPName: string;
}
const CreateComment = (props : CreateCommentProps) => {
    const [commentContent, setCommentContent] = useState('')
    const mutateComment = useMutation((data : commentProps) => AddComment(data),{
        onError: (e) => console.log(e),
        onSuccess: (res) => console.log(res)
    })
    const dispatch = useDispatch()

    const onPostKey = (e : React.KeyboardEvent) =>{
        if (e.key === 'Enter') {
            const newComment : commentProps = {postId: props.postId, content: commentContent, OPName: props.OPName}
            mutateComment.mutate(newComment)
            dispatch(AddCommentToPost(newComment))
            setCommentContent('');
        }
    }
    const onPostClick = () =>{
            const newComment : commentProps = {postId: props.postId, content: commentContent, OPName: props.OPName}
            mutateComment.mutate(newComment)
            dispatch(AddCommentToPost(newComment))
            setCommentContent('');
    }
    return (
        <InputWrapper>
        <AiOutlineSmile size={25} />
            <InputText onChange={(e) => setCommentContent(e.target.value)} onKeyDown={onPostKey} value={commentContent} type="text" placeholder="Write Comment"/>
            <PostButton onClick={() => onPostClick()} >Post</PostButton>
        </InputWrapper>
    )
}

export default CreateComment
