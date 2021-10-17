import axios from "axios"

export const getAllPosts = async() => {
    const {data} : any = await axios.get(`${process.env.REACT_APP_BACKEND_API}Posts/All`, {withCredentials: true})
    return data;
}