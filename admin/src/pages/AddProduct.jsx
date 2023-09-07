import { useState } from "react";
import CustomInput from "../component/CustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const AddProduct=()=>{
    const [desc,setDesc]=useState();
    const handleDesc=(e)=>{
        console.log(e);
    }
    return(
        <div>
            <h3 className="mb-4">Add Product</h3>
            <div>
                <form action="">
                    <CustomInput type='text' label='Enter Product Title'/>
                    <div className="mb-3">
                        <ReactQuill theme="snow" value={desc} onChange={(etv)=>handleDesc(etv)}/>
                    </div>
                    <CustomInput type='number' label='Enter Product Price'/>
                    <select name="" id="" className="form-control py-3  mt-3">
                        <option value="">Select Brand</option>
                    </select>
                    <select name="" id="" className="form-control py-3  mt-3">
                        <option value="">Select Category</option>
                    </select>
                    <select name="" id="" className="form-control py-3  mt-3">
                        <option value="">Select Color</option>
                    </select>
                    <CustomInput type='number' label='Enter Product Price'/>
                    <button className="btn btn-success border-0 rounded-3 my-5">
                            Add Product
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddProduct;