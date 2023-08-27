import express from "express";
import { createProduct, deleteProduct, getAProduct, getAllProduct, updateProduct } from "../controllers/productCrl.js";
const router=express.Router();

router.post("/",createProduct)
router.put("/:id",updateProduct)
router.get("/",getAllProduct);
router.get("/:id",getAProduct)
router.delete("/:id",deleteProduct)
export default router;