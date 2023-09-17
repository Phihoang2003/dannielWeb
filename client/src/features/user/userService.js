import axios from "axios"
import {base_url} from "../../utils/base_url" 
const register=async(userData)=>{
    const res=await axios.post(`${base_url}user/register`,userData);
    if(res.data){
        return res.data
    }
}

export const authService={
    register
}