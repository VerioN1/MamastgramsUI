export interface IUser {
    isAuth: boolean;
    userName: string;
    personalName: string;
    avatar: string;
    posts: Array<string>;
    followers: Array<string>;
    followings: Array <string>;
    likedPosts?: string;
}
export interface RegisterData {
    userName: string;
    password: string;
    avatar: string;
    
}