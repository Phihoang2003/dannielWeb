import axios from "axios";
import { base_url } from "../../utils/base_url.js";


const login=async(userData)=>{
    const response=await axios.post(`${base_url}user/admin-login`,userData);
    return response.data;
}
const authService={
    login
};
export default authService;