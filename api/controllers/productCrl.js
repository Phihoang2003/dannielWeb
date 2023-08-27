import Product from "../models/productModel.js";
import slugify from "slugify"
import asyncHandler from "express-async-handler"

export const createProduct =asyncHandler(async(req,res)=>{
    try {
        if(req.body.title){

            req.body.slug=slugify(req.body.title)
        }
        const newProduct=await Product.create(req.body);
        res.json(newProduct)

    } catch (error) {
        throw new Error(error)
    }
})

export const updateProduct=asyncHandler(async(req,res)=>{
    const id=req.params.id;
    try {
        if(req.body.title){
            req.body.slug=slugify(req.body.title);
        }
        const updateProduct= await Product.findByIdAndUpdate(id,req.body,{new:true});
        res.json(updateProduct)
    } catch (error) {
        throw new Error(error)
    }
})

export const getAllProduct=asyncHandler(async(req,res)=>{
    try {
        const queryObj={...req.query};
        const excludeObj=["page","sort","limit","fields","order"];
        excludeObj.forEach(el=>delete queryObj[el]);
        let queryStr=JSON.stringify(queryObj);
        queryStr=queryStr.replace(/\b(gte|gt|lte|le)\b/g,(match)=>`$${match}`)
        let product=Product.find(JSON.parse(queryStr));
        //sort
        if(req.query.sort){
            const sortBy=req.query.sort.split(",").join(' ');
            const sortOrder=req.query.order==="desc"?-1:1;
            
            product=await product.sort({[sortBy]:sortOrder});
            // console.log(sortOrder);
        }
        else{
                product=product.sort('_createAt')
        }
        //limiting
        if(req.query.fields){
            const fields=req.query.fields.split(",").join(" ");
            product=product.select(fields)
        }
        else{
            product=product.select("-__v");
        }
        const query = await product;
        res.json(query)
    } catch (error) {
        throw new Error(error)
    }
})

export const getAProduct=asyncHandler(async(req,res)=>{
    const id=req.params.id;
    try {
        const product=await Product.findById(id);
        res.json(product)
    } catch (error) {
        throw new Error(error)
    }
})
export const deleteProduct=asyncHandler(async(req,res)=>{
    const id=req.params.id;
    try {
        await Product.findByIdAndDelete(id);
        res.json("Successfuly delete");
    } catch (error) {
        throw new Error(error);
    }
})
