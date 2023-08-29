import express from "express";
import { blockUser, createUser, deleteUser, getAUser, getAllUser, handleRefreshToken, loginUser, logoutUser, unblockUser, updateUser } from "../controllers/authCtrl.js";
import { authMiddleware,isAdmin } from "../middleware/authMiddleware.js";
const router=express.Router();

router.post("/register",createUser);
router.post("/login",loginUser)
router.get("/logout",logoutUser);
router.get("/",getAllUser)
router.get("/refresh",handleRefreshToken)
router.get("/:id",authMiddleware,isAdmin,getAUser)
router.put("/edit-user",authMiddleware,isAdmin,updateUser)
router.put("/block-user/:id",authMiddleware,isAdmin,blockUser)
router.put("/unblock-user/:id",authMiddleware,isAdmin,unblockUser)

router.delete("/:id",deleteUser)
export default router;