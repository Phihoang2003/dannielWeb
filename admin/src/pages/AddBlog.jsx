import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import CustomInput from "../component/CustomInput";

import { toast } from "react-toastify";
import { useState } from "react";

const AddBlog=()=>{
    const [desc,setDesc]=useState();
    const handleDesc=(e)=>{
        console.log(e);
    }
    return(
        <div>
            <h3 className="mb-4">Add Blog</h3>
            <div>
                <form action="">
                    <CustomInput type='text' label='Enter Blog Title'/>
                    <select name="" id="" className="form-control py-3  mt-3">
                        <option value="">Select Blog Category</option>
                    </select>
                    <ReactQuill theme="snow" value={desc} onChange={(etv)=>handleDesc(etv)}/>

                    <button className="btn btn-success border-0 rounded-3 my-5">Add Blog </button>
                </form>
            </div>
        </div>
    )
}

export default AddBlog