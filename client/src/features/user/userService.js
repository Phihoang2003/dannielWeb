import axios from "axios";
import { base_url } from "../../utils/base_url";
const register = async (userData) => {
  const res = await axios.post(`${base_url}user/register`, userData);
  if (res.data) {
    return res.data;
  }
};

const login = async (useData) => {
    console.log({useData});
  const res = await axios.post(`${base_url}user/login`, useData);
  if (res.data) {
    localStorage.setItem("customer", JSON.stringify(res.data));
    }
    return res.data;
};

export const authService = {
  register,
  login,
};
