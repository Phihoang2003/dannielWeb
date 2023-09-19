import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";
const register = async (userData) => {
  const res = await axios.post(`${base_url}user/register`, userData);
  if (res.data) {
    return res.data;
  }
};

const login = async (useData) => {
  const res = await axios.post(`${base_url}user/login`, useData);
  if (res.data) {
    localStorage.setItem("customer", JSON.stringify(res.data));
    }
    return res.data;
};
export const getUserWishList=async()=>{

  const res=await axios.get(`${base_url}user/wishlist`,config);
  if(res.data){
    
    return res.data;
  }
}
export const authService = {
  register,
  login,
  getUserWishList
};
