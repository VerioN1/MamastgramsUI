import { configureStore } from '@reduxjs/toolkit';
import CommentsSlice from './Reducers/comments/Comments';
import FollowersPostsSlice from './Reducers/Post/FollowersPostSlice';
import userSlice from './Reducers/User/UserSlice';

export const store = configureStore({
  reducer: {
    userData: userSlice,
    FollowersPosts: FollowersPostsSlice,
    comments: CommentsSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
