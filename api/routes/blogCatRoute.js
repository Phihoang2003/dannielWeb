import express from "express"
import {  } from "../controllers/categoryCtrl.js";
import { authMiddleware, isAdmin } from "../middleware/authMiddleware.js";
import { createBlogCat, deleteBlogCat, getAllBlogCat, getBlogCat, updateBlogCat } from "../controllers/blogCatCtrl.js";

const router=express.Router();


router.post("/",authMiddleware,isAdmin,createBlogCat);
router.put("/:id",authMiddleware,isAdmin,updateBlogCat)
router.delete("/:id",authMiddleware,isAdmin,deleteBlogCat)
router.get("/",getAllBlogCat);
router.get("/:id",getBlogCat)
export default router;