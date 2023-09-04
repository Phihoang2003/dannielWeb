import Blog from "../models/blogModel.js";
import User from "../models/userModel.js";

import asyncHandler from "express-async-handler";
import validateMongoDbId from "../utils/validateMongoId.js";

export const createBlog = asyncHandler(async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body);
    res.json(newBlog);
  } catch (error) {
    throw new Error(error);
  }
});

export const updateBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updateBlog = await Blog.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateBlog);
  } catch (error) {
    throw new Error(error);
  }
});
export const getABlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getBlog = await Blog.findById(id).populate("likes").populate("dislikes");
    await Blog.findByIdAndUpdate(id, { $inc: { numViews: 1 } }, { new: true });
    res.json(getBlog);
  } catch (error) {
    throw new Error(error);
  }
});
export const getAllBlogs = asyncHandler(async (req, res) => {
  try {
    const getBlogs = await Blog.find();
    res.json(getBlogs);
  } catch (error) {
    throw new Error(error);
  }
});

export const deleteBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);
    res.json(deletedBlog);
  } catch (error) {
    throw new Error(error);
  }
});

export const likeTheBlog = asyncHandler(async (req, res) => {
  const { blogId } = req.body;
  validateMongoDbId(blogId);
  const blog = await Blog.findById(blogId);
  const loginUserId = req?.user?._id;
  const isLiked = blog?.isLiked;
  const alreadyDisliked = blog?.dislikes.find(
    (userId) => userId?.toString() === loginUserId?.toString()
  );

  let updatedBlog = null;

  if (alreadyDisliked) {
    updatedBlog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { dislikes: loginUserId },
        isDisliked: false,
        $push:{likes:loginUserId},
        isLiked:true
      },
      { new: true }
    );
  } else if (isLiked) {
    updatedBlog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { likes: loginUserId },
        isLiked: false,
      },
      { new: true }
    );
  } else {
    updatedBlog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $push: { likes: loginUserId },
        isLiked: true,
      },
      { new: true }
    );
  }

  res.json(updatedBlog);
});

export const dislikeTheBlog = asyncHandler(async (req, res) => {
  const { blogId } = req.body;
  validateMongoDbId(blogId);
  const blog = await Blog.findById(blogId);
  const loginUserId = req?.user?._id;
  const isDisliked = blog?.isDisliked;
  const alreadyLiked = blog?.likes.find(
    (userId) => userId?.toString() === loginUserId?.toString()
  );

  let updatedBlog = null;

  if (alreadyLiked) {
    updatedBlog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { likes: loginUserId },
        isLiked: false,
        $push:{dislikes:loginUserId},
        isDisliked:true
      },
      { new: true }
    );
  } else if (isDisliked) {
    updatedBlog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { dislikes: loginUserId },
        isDisliked: false,
      },
      { new: true }
    );
  } else {
    updatedBlog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $push: { dislikes: loginUserId },
        isDisliked: true,
      },
      { new: true }
    );
  }

  res.json(updatedBlog);
});
