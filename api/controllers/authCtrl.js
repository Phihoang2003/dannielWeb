import User from "../models/userModel.js";
import asyncHandler from "express-async-handler"
import validateMongoDbId from "../utils/validateMongoId.js";
import { generateRefreshToken } from "../config/refreshToken.js";
import { generateToken } from "../config/jwtToken.js";
import jwt, { decode } from "jsonwebtoken"
export const createUser=asyncHandler(async(req,res)=>{
    const email=req.body.email;
    const findUser=await User.findOne({email:email});
    
    if(!findUser){
        const newUser=await User.create(req.body);
        res.json(newUser)
    }
    else{
        throw new Error("User has been exist");
    }
})
export const getAllUser=asyncHandler(async(req,res)=>{
    try {
        const allUser=await User.find();
        res.json(allUser)
    } catch (error) {
        throw new Error(error)
    }
})
export const getAUser=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    validateMongoDbId(id);
    try {
        const getAUser=await User.findById(id);
        res.json(getAUser)
    } catch (error) {
        throw new Error(error);
    }
})

export const loginUser=asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    const findUser=await User.findOne({email:email})
    if(findUser&&await findUser.isPasswordMatched(password)){
        const refreshToken=generateRefreshToken(findUser?._id);
        const updateUser= await User.findByIdAndUpdate(findUser._id,{
            refreshToken:refreshToken
        },{new:true});

        res.cookie("refreshToken",refreshToken,{
            httpOnly:true,
            maxAge:72*60*60*1000,
        })

        res.json({
            _id:findUser?._id,
            firstname:findUser?.firstname,
            lastname:findUser?.lastname,
            email:findUser?.email,
            mobile:findUser?.mobile,
            token:generateToken(findUser?._id)

        })

    
    }
    else{
        throw new Error("Invalid credentials")
    }
})
export const logoutUser=asyncHandler(async(req,res)=>{
    const cookie=req.cookies;
    if(!cookie?.refreshToken) throw new Error("No refresh Token in Cookie");
    const refreshToken=cookie.refreshToken;
    const user=await User.findOne({refreshToken});
    console.log(user);
    if(!user){
        res.clearCookie("refreshToken",{
            httpOnly:true,
            secure:true
        });
        return res.sendStatus(204)
    }
    await User.findOneAndUpdate({refreshToken},{
        refreshToken:""
    })
    res.clearCookie("refreshToken",{
        httpOnly:true,
        secure:true
    });
    res.status(204).send("Logout successfully");
})
export const handleRefreshToken=asyncHandler(async(req,res)=>{
    const cookie=req.cookies;
    if(!cookie?.refreshToken) throw new Error("No refresh Token in Cookie")
    const refreshToken=cookie.refreshToken;
    const user=await User.findOne({refreshToken});
    if(!user) throw new Error("No refresh token present in db")
    jwt.verify(refreshToken,process.env.JWT_SECRET,(err,decoded)=>{
        if(err||user.id!==decoded.id){
            throw new Error("There is something wrong with refresh token")
        }
    })
    const accessToken=generateToken(user?._id);
    res.json({accessToken})


  })
export const updateUser=asyncHandler(async(req,res)=>{
    const{_id}=req.user
    try {
        const updateUser=await User.findByIdAndUpdate(_id,{
            firstname:req?.body?.firstname,
            lastname:req?.body?.lastname,
            email:req?.body?.email,
            mobile:req?.body?.mobile
        },{new:true})
        res.json(updateUser)
    } catch (error) {
        throw new Error(error)
    }
})
export const deleteUser=asyncHandler(async(req,res,next)=>{
    const {id}=req.params
    try {
        const deleteUser=await User.findByIdAndDelete(id);
        res.json(deleteUser)
    } catch (error) {
        throw new Error(error)
    }
})


export const blockUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
  
    try {
      const blockuser = await User.findByIdAndUpdate(
        id,
        {
          isBlocked: true,
        },
        {
          new: true,
        }
      );
      res.json(blockuser);
    } catch (error) {
      throw new Error(error);
    }
  });
  
  export const unblockUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
  
    try {
      const unblock = await User.findByIdAndUpdate(
        id,
        {
          isBlocked: false,
        },
        {
          new: true,
        }
      );
      res.json({
        message: "User UnBlocked",
      });
    } catch (error) {
      throw new Error(error);
    }
  });
  

