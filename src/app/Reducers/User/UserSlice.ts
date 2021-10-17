import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../../types/UserTypes';

const initialState: IUser = {
    userName: '',
    personalName: '',
    avatar: '',
    posts: [],
    followers: [],
    followings: [],
    isAuth: false
};

export const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IUser>) => {
      state.isAuth = true;
      state.personalName = action.payload.personalName;
      state.userName = action.payload.userName;
      state.avatar = action.payload.avatar;
      state.posts = action.payload.posts;
      state.followers = action.payload.followers;
      state.followings = action.payload.followings;
    },
    logout: (state) => {
      state.isAuth = false;
      state.personalName = '';
      state.userName = "";
      state.avatar = "";
      state.posts = [];
      state.followers = [];
      state.followings = [];
    }
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;