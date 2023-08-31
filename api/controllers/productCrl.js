import Product from "../models/productModel.js";
import slugify from "slugify";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
export const createProduct = asyncHandler(async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
  } catch (error) {
    throw new Error(error);
  }
});

export const updateProduct = asyncHandler(async (req, res) => {
  const id = req.params.id;
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const updateProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateProduct);
  } catch (error) {
    throw new Error(error);
  }
});

export const getAllProduct = asyncHandler(async (req, res) => {
  try {
    const queryObj = { ...req.query };
    const excludeObj = ["page", "sort", "limit", "fields", "order"];
    excludeObj.forEach((el) => delete queryObj[el]);
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|le)\b/g, (match) => `$${match}`);
    let query = Product.find(JSON.parse(queryStr));
    //sort
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      const sortOrder = req.query.order === "desc" ? -1 : 1;

      query = await query.sort({ [sortBy]: sortOrder });
      // console.log(sortOrder);
    } else {
      query = query.sort("_createAt");
    }
    //limiting
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    } else {
      query = query.select("-__v");
    }
    //pagnination
    const page = req.query.page;
    const limit = req.query.limit;
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);
    if (req.query.page) {
      const productCount = await Product.countDocuments();
      if (skip >= productCount) throw new Error("This page not exist");
    }

    const product = await query;
    res.json(product);
  } catch (error) {
    throw new Error(error);
  }
});

export const getAProduct = asyncHandler(async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);
    res.json(product);
  } catch (error) {
    throw new Error(error);
  }
});
export const deleteProduct = asyncHandler(async (req, res) => {
  const id = req.params.id;
  try {
    await Product.findByIdAndDelete(id);
    res.json("Successfuly delete");
  } catch (error) {
    throw new Error(error);
  }
});

export const addToWishlist = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { proId } = req.body;
  try {
    const user = await User.findById(_id);
    const alreadyadded = user.wishlist.find((id) => id.toString() === proId);
    if (alreadyadded) {
      let user = await User.findByIdAndUpdate(_id, {
        $pull: { wishlist: proId },
      });
      res.json(user);
    } else {
      let user = await User.findByIdAndUpdate(_id, {
        $push: { wishlist: proId },
      });
      res.json(user);
    }
  } catch (error) {
    throw new Error(error);
  }
});
export const rating = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { star, comment, proId } = req.body;
  try {
    const product = await Product.findById(proId);
    const alreadyRated = product.ratings.find(
      (userId) => userId.postedby.toString() === _id.toString()
    );
    console.log(alreadyRated);
    if (alreadyRated) {
      const updateRating = await Product.updateOne(
        {
          ratings: { $elemMatch: alreadyRated },
        },
        {
          $set: { "ratings.$.star": star, "ratings.$.comment": comment },
        },
        { new: true }
      );
    } else {
      const rateProduct = await Product.findByIdAndUpdate(
        proId,
        {
          $push: { ratings: { star: star, comment: comment, postedby: _id } },
        },
        { new: true }
      );
    }

    const getAllRating = await Product.findById(proId);
    let totalRating = getAllRating.ratings.length;
    let sumRating = getAllRating.ratings
      .map((item) => item.star)
      .reduce((prev, cur) => prev + cur, 0);
    let actualRating = Math.round(sumRating / totalRating);
    let finalProduct = await Product.findByIdAndUpdate(
      proId,
      { totalrating: actualRating },
      { new: true }
    );

    res.json(finalProduct);
  } catch (error) {
    throw new Error(error);
  }
});
