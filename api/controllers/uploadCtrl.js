import fs from "fs"
import asyncHandler from "express-async-handler"

import {cloudinaryUploadImg,cloudinaryDeleteImg} from "../utils/cloudinary.js"


export const uploadImages = asyncHandler(async (req, res) => {
  try {
    const uploader =async (path) =>await cloudinaryUploadImg(path, "images");
    const urls = [];
    const files = req.files;
    
    for (const file of files) {
      const { path } = file;
      
      const newpath = await uploader(path);
      
      
      urls.push(newpath);
      fs.unlinkSync(path);
    }
    const images = urls.map((file) => {
      return file;
    });
    res.json(images);
  } catch (error) {
    throw new Error(error);
  }
});
export const deleteImages = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = cloudinaryDeleteImg(id, "images");
    res.json({ message: "Deleted" });
  } catch (error) {
    throw new Error(error);
  }
});

