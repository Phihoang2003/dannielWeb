import blogCatModel from "../models/blogCatModel.js";
import asyncHandler from "express-async-handler";
import validateMongoDbId from "../utils/validateMongoId.js";


export const createBlogCat = asyncHandler(async (req, res) => {
  try {
    const newBlogCat = await blogCatModel.create(req.body);
    res.json(newBlogCat);
  } catch (error) {
    throw new Error(error);
  }
});
export const updateBlogCat = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedblogCat = await blogCatModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedblogCat);
  } catch (error) {
    throw new Error(error);
  }
});
export const deleteBlogCat = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedblogCat = await blogCatModel.findByIdAndDelete(id);
    res.json(deletedblogCat);
  } catch (error) {
    throw new Error(error);
  }
});
export const getBlogCat = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getablogCat = await blogCatModel.findById(id);
    res.json(getablogCat);
  } catch (error) {
    throw new Error(error);
  }
});
export const getAllBlogCat = asyncHandler(async (req, res) => {
  try {
    const getallblogCat = await blogCatModel.find();
    res.json(getallblogCat);
  } catch (error) {
    throw new Error(error);
  }
});
