/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components'
import { IComment, IPostComments } from '../../../types/CommetsTypes';
import Comment from '../../Comment/Comment'

const CommentsWrapper = styled.div`
display:flex;
flex-direction: column;
align-items:start;
`;
interface CommentsProps {
    comments : IPostComments | undefined,
}
const CommentsSection : React.FC<CommentsProps> = (props) => {
    const { comments: postCommentsDTO } = props
    if(postCommentsDTO){
        return (
            <CommentsWrapper>
                {postCommentsDTO.comments.length > 2 ? 
                <a href="#" className="gray-text">show {postCommentsDTO.comments.length-2} more comments</a>
                : null}
                {postCommentsDTO.comments.map((comment :IComment, index) => {
                    if(index > postCommentsDTO.comments.length-3){
                        return(
                            <Comment key={comment.id} id={comment.id} OPName={comment.OPName} content={comment.content} likes={comment.likes} />
                        )
                    }})}
            </CommentsWrapper>
        )
    }else{
        return null
    }
}

export default CommentsSection
