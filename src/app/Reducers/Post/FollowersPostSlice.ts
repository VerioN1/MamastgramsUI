import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILikeAction, IPost } from '../../../types/PostType';

const initialState: Array<IPost> =[];

export const FollowersPostsSlice = createSlice({
  name: 'FollowersPosts',
  initialState,
  reducers: {
    setFollowersPosts: (state, action: PayloadAction<Array<IPost>>) => {
      return [...action.payload]
    },
    addOrRemoveLike: (state, action: PayloadAction<ILikeAction>) => {
      state = state.map(post => {
        if(post._id === action.payload.postId)
          if(post.likes.includes(action.payload.userName)){
              post.likes = post.likes.filter((value) => value !== action.payload.userName);
          }else{
            post.likes.push(action.payload.userName)
          }
        return post;
      })
    },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { setFollowersPosts, addOrRemoveLike } = FollowersPostsSlice.actions;

export default FollowersPostsSlice.reducer;