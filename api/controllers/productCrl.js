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
        let query=Product.find(JSON.parse(queryStr));
        //sort
        if(req.query.sort){
            const sortBy=req.query.sort.split(",").join(' ');
            const sortOrder=req.query.order==="desc"?-1:1;
            
            query=await query.sort({[sortBy]:sortOrder});
            // console.log(sortOrder);
        }
        else{
                query=query.sort('_createAt')
        }
        //limiting
        if(req.query.fields){
            const fields=req.query.fields.split(",").join(" ");
            query=query.select(fields)
        }
        else{
            query=query.select("-__v");
        }
        //pagnination
        const page=req.query.page;
        const limit=req.query.limit;
        const skip=(page-1)*limit;
        query=query.skip(skip).limit(limit);
        if(req.query.page){
            const productCount=await Product.countDocuments();
            if(skip>=productCount)
                throw new Error("This page not exist")
        }
        console.log(page,limit,skip);
        const product = await query;
        res.json(product)
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
