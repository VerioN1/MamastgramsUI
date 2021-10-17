import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { commentProps } from '../../../Components/Post/api/api';
import { IComment, IPostComments } from '../../../types/CommetsTypes';

const initialState: Array<IPostComments> =[];

export interface IAddLikeToComment{
    postId: string;
    comment: IComment;
    userWhoLiked:string;
}

export const CommentsSlice = createSlice({
  name: 'FollowersPosts',
  initialState,
  reducers: {
    setAllPostsComments: (state, action: PayloadAction<Array<IPostComments>>) => {
      return [...action.payload]
    },
    setPostComments: (state, action: PayloadAction<IPostComments>)=>{
        return [...state, action.payload]
    },
    AddCommentToPost: (state, action: PayloadAction<commentProps>) => {
        state.find(value => value.postId === action.payload.postId)?.comments.push({
          id: action.payload.content,
          content: action.payload.content,
          OPName: action.payload.OPName,
          likes: []
      })
    },
    AddLikeToComment: (state, action: PayloadAction<IAddLikeToComment>) => {
      state.find(value => value.postId === action.payload.postId)
      ?.comments.find(comment => comment.id === action.payload.comment.id)
      ?.likes.push(action.payload.userWhoLiked);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAllPostsComments, AddCommentToPost, setPostComments, AddLikeToComment} = CommentsSlice.actions;

export default CommentsSlice.reducer;