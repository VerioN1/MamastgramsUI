export interface IPostComments{
    postId : string,
    comments: Array<IComment>
}

export interface IComment {
    id: string;
    OPName: string;
    content: string;
    likes: Array<string>;
}