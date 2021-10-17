import { IPost } from './../types/PostType';
import avatarPicture from '../assets/avatar.png';
import { IComment, IPostComments } from '../types/CommetsTypes';

const comment1 : IComment ={
    OPName: 'rotem bar',
    content: 'test ajd asdfajsioja sdajdfasjdf aijf ajsdf jafja sjdfjasd fjoajf',
    id: '',
    likes: []
}
const comment2 : IComment ={
    OPName: 'rotem bar',
    content: 'test ajd asdfajsioja sdajdfasjdf aijf ajsdf jafja sjdfjasd fjoajf',
    likes: ["alon"],
    id: ''
}

export const PostMock : IPost = {
    _id: "1234",
    likes: ['alon'],
    image: 'https://via.placeholder.com/150',
    OPName: 'Alon',
    OPAvatar: avatarPicture,
    OPCaption: 'that my life',
    creationDate: new Date(),
}
export const CommentsMock : IPostComments ={
    postId: '1234',
    comments: [comment1, comment2]
}