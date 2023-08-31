import express from "express"
import { createCategory, deleteCategory, getCategory, getallCategory, updateCategory } from "../controllers/categoryCtrl.js";
import { authMiddleware, isAdmin } from "../middleware/authMiddleware.js";
const router=express.Router();


router.post("/",authMiddleware,isAdmin,createCategory);
router.put("/:id",authMiddleware,isAdmin,updateCategory)
router.delete("/:id",authMiddleware,isAdmin,deleteCategory)
router.get("/",getallCategory);
router.get("/:id",getCategory)
export default router;