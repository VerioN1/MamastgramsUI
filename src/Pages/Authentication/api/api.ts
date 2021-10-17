import axios from "axios"

axios.defaults.withCredentials = true

export interface IUserProps {
    userName: string,
    password: string,
    personalName?: string,
    avatar?: FileList | null | undefined
} 

export const RegisterUserRequest = async(data : IUserProps) =>{
    if(data.avatar && data.personalName){
        const form = new FormData()
        form.append("userName", data.userName)
        form.append("password", data.password)
        form.append("personalName", data.personalName)
        form.append("file", data.avatar[0])
        return await axios.post(`${process.env.REACT_APP_BACKEND_API}Auth/Register`,form,
            {
                withCredentials: true,
                headers: { "Content-Type": "multipart/form-data" },
             })
    }
    throw new Error("no image uploaded")
}

export const LoginUser = async(data : IUserProps) => {
    return await axios.post(`${process.env.REACT_APP_BACKEND_API}Auth/Login`, {userName: data.userName, password: data.password})
}