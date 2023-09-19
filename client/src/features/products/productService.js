import axios from "axios"
import {base_url} from "../../utils/base_url"
import {config} from "../../utils/axiosconfig"
const getProducts=async()=>{
    const res=await axios.get(`${base_url}product`);
    if(res.data){
        return res.data;
    }
}
//Truyền dữ liệu từ body,phải thêm dấu {}
const addToWishList=async(proId)=>{
    
    const res=await axios.put(`${base_url}product/wishlist`,{proId},config);
    
    if(res.data){
        
        return res.data;
    }
}
export const productService={
    getProducts,
    addToWishList
}
