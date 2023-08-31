import express from "express";
import { addToWishlist, createProduct, deleteProduct, getAProduct, getAllProduct, rating, updateProduct } from "../controllers/productCrl.js";
const router=express.Router();
import {authMiddleware} from "../middleware/authMiddleware.js"
router.put("/wishlist",authMiddleware,addToWishlist)
router.put("/rating",authMiddleware,rating)
router.post("/",createProduct)  
router.put("/:id",updateProduct)
router.get("/",getAllProduct);
router.get("/:id",getAProduct)
router.delete("/:id",deleteProduct)
export default router;