import express from "express"
import  { uploadImages, deleteImages } from "../controllers/uploadCtrl"
import { isAdmin, authMiddleware } from "../middleware/authMiddleware.js"
import  { uploadPhoto, productImgResize } from "../middleware/uploadImage.js"
const router = express.Router();

router.post(
  "/",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 10),
  productImgResize,
  uploadImages
);

router.delete("/delete-img/:id", authMiddleware, isAdmin, deleteImages);

export default router