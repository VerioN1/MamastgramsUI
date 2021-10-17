export interface IPost {
    _id: string,
    likes: Array<string>,
    image : string ,
    OPName: string,
    OPAvatar: string,
    OPCaption: string,
    creationDate: Date,
}


export interface ILikeAction {
    userName: string;
    postId: string;
    likes: Array<string>;
}