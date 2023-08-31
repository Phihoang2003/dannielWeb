import express from "express"
import { createBlog, deleteBlog, dislikeTheBlog, getABlog, getAllBlogs, likeTheBlog, updateBlog } from "../controllers/blogCtrl.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
const router=express.Router();

router.post("/",authMiddleware,createBlog)
router.get("/",authMiddleware,getAllBlogs);
router.put("/likes",authMiddleware,likeTheBlog)
router.put("/dislikes",authMiddleware,dislikeTheBlog)
router.get("/:id",getABlog)
router.put("/:id",updateBlog)
router.delete("/:id",deleteBlog)
export default router