import { IUserSearchDetails } from './../types';
import axios from "axios"

export const searchQuery = async(userInput : IUserSearchDetails) =>{
    const {data} = await axios.get(`${process.env.REACT_APP_BACKEND_API}Auth/SearchUser/${userInput.keyWord}?limit=${userInput.limit}&amount=${userInput.amount}`);
    return data;
}