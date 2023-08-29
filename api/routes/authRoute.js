import express from "express";
import { blockUser, createUser, deleteUser, forgotPasswordToken, getAUser, getAllUser, handleRefreshToken, loginUser, logoutUser, resetPassword, unblockUser, updatePassword, updateUser } from "../controllers/authCtrl.js";
import { authMiddleware,isAdmin } from "../middleware/authMiddleware.js";
const router=express.Router();

router.post("/register",createUser);

router.post("/login",loginUser)
router.get("/logout",logoutUser);
router.post("/forgot-password-token",forgotPasswordToken)
router.put("/reset-password/:token",resetPassword)
router.put("/password",authMiddleware,updatePassword)
router.get("/",getAllUser)
router.get("/refresh",handleRefreshToken)
router.get("/:id",authMiddleware,isAdmin,getAUser)
router.put("/edit-user",authMiddleware,isAdmin,updateUser)
router.put("/block-user/:id",authMiddleware,isAdmin,blockUser)
router.put("/unblock-user/:id",authMiddleware,isAdmin,unblockUser)

router.delete("/:id",deleteUser)
export default router;