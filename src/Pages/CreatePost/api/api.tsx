import axios from "axios"

export interface IPostData {
    image: FileList,
    OPName: string,
    OPAvatar: string,
    OPCaption: string,
}

export const CreatePostRequest = async(postData : IPostData) => {
    const formData = new FormData()
    formData.append('OPName', postData.OPName)
    formData.append('OPAvatar', postData.OPAvatar)
    formData.append('OPCaption', postData.OPCaption)
    formData.append('file', postData.image[0])
    return await axios.post(`${process.env.REACT_APP_BACKEND_API}Posts/Create` , formData, {withCredentials: true})
}