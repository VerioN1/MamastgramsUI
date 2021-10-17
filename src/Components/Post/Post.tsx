import styled from 'styled-components'
import Header from './components/Header'
import LikesSection from './components/LikesSection';
import ReactionBar from './components/ReactionBar';
import PublisherSection from './components/PublisherSection';
import CommentsSection from './components/CommentsSection';
import CreateComment from './components/CreateComment';
import { IPost } from '../../types/PostType';
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { useQuery } from 'react-query';
import { getCommentsForPost } from './api/api';
import { IPostComments } from '../../types/CommetsTypes';
import { setPostComments } from '../../app/Reducers/comments/Comments';
const PostWrapper = styled.div`
display: flex;
flex-direction: column;
width: 45%;
border: 1px solid #80808036;
margin-top: 3rem;
`;
const PostDetailsSection = styled.div`
padding-left:15px;
padding-right:10px;
`;

export interface PostProps {
    postData: IPost
}

const Post : React.FC<PostProps> = ({postData}) => {
    const userData = useSelector((state: RootState) => state.userData);
    const comments = useSelector((state: RootState) => state.comments);
    const dispatch = useDispatch()
    const getComments = useQuery(`${postData._id}commentsQuery`, () => getCommentsForPost(postData._id),{
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        onSuccess: (res : IPostComments) => dispatch(setPostComments(res)),
        onError: (e) => console.log(e)
    })
    return (
        <PostWrapper>
            <Header OPName={postData.OPName} OPAvatar={postData.OPAvatar} />
            <img alt="post" src={`${process.env.REACT_APP_BACKEND_API}PostsImages/${postData.image}`} className="post-image" />
            <PostDetailsSection>
                <ReactionBar postId={postData._id} likes={postData.likes} userName={userData.userName}/>
                <LikesSection likes={postData.likes}/>
                <PublisherSection OPName={postData.OPName} OPCaption={postData.OPCaption} />{
                    getComments.isSuccess ? 
                    <CommentsSection comments={comments.find(value => value.postId === postData._id)} />
                    :
                    null
                }
                <p className="gray-text" >{moment(postData.creationDate, "x").format("DD MMM YYYY hh:mm a")} </p>
                <CreateComment postId={postData._id} OPName={userData.userName}/>
            </PostDetailsSection>
        </PostWrapper>
    )
}

export default Post
