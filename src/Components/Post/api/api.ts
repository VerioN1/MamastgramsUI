import axios from "axios"

export interface likeProps {
    userName: string,
    postId: string,
}
export interface commentProps {
    postId: string,
    content: string,
    OPName: string,
}
export const AddOrRemoveLike = async(likeData : likeProps) =>{
    return await axios.post(`${process.env.REACT_APP_BACKEND_API}Posts/AddOrRemoveLike`, likeData, {withCredentials: true})
}
export const AddComment = async(commentData : commentProps) =>{
    return await axios.post(`${process.env.REACT_APP_BACKEND_API}Comments/Create`, commentData, {withCredentials: true})
}
export const getCommentsForPost = async(postId : string) =>{
    const {data} = await axios.get(`${process.env.REACT_APP_BACKEND_API}Comments/${postId}`, {withCredentials: true})
    return data
}