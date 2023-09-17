import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/base_url";

const getProducts = async () => {
  const response = await axios.get(`${base_url}product/`);

  return response.data;
};
const createProduct = async (product) => {
  console.log({product});
  const response = await axios.post(`${base_url}product/`, product);
  return response.data; 
};

const deleteProduct=async(productId)=>{
  const response=await axios.delete(`${base_url}product/${productId}`)
  return response.data
}
const updateProduct=async(product)=>{
  const response=await axios.put(`${base_url}product/${product.id}`,{
    title:product.productData.title,
    description:product.productData.description,
    category:product.productData.category,
    brand:product.productData.brand,
    price:product.productData.price,
    color:product.productData.color,
    quantity:product.productData.quantity,
    images:product.productData.images,
    tags:product.productData.tags

  });
  return response.data;
}
const getAProduct=async(productId)=>{
  const response=await axios.get(`${base_url}product/${productId}`);
  return response.data
}
const productService = {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
  getAProduct
};

export default productService;