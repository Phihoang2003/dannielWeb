import axios from "axios"
import {base_url} from "../../utils/base_url"

const getProducts=async()=>{
    const res=await axios.get(`${base_url}product`);
    if(res.data){
        return res.data;
    }
}

export const productService={
    getProducts
}
