import express from "express"

import {authMiddleware,isAdmin} from "../middleware/authMiddleware.js"
import { createBrand, deleteBrand, getBrand, getallBrand, updateBrand } from "../controllers/brandCtrl.js";
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createBrand);
router.put("/:id", authMiddleware, isAdmin, updateBrand);
router.delete("/:id", authMiddleware, isAdmin, deleteBrand);
router.get("/:id", getBrand);
router.get("/", getallBrand);

export default router;