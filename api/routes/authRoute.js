import express, { application } from "express";
import { applyCoupon, blockUser, createOrder, createUser, deleteUser, emptyCart, forgotPasswordToken, getAUser, getAllOrders, getAllUser, getOrderByUserId, getOrders, getUserCart, handleRefreshToken, loginUser, logoutUser, resetPassword, unblockUser, updateOrderStatus, updatePassword, updateUser, userCart } from "../controllers/authCtrl.js";
import { authMiddleware,isAdmin } from "../middleware/authMiddleware.js";
const router=express.Router();

router.post("/register",createUser);

router.post("/login",loginUser)
router.get("/logout",logoutUser);
router.post("/forgot-password-token",forgotPasswordToken)
router.put("/reset-password/:token",resetPassword)
router.post("/cart",authMiddleware,userCart);
router.get("/cart",authMiddleware,getUserCart)
router.post("/cart/cash-order",authMiddleware,createOrder)
router.post("/applycoupon",authMiddleware,applyCoupon)
router.get("/get-orders",authMiddleware,getOrders)
router.get("/get-all-orders",authMiddleware,getAllOrders)
router.get("/get-orders/:id",authMiddleware,getOrderByUserId)
router.put("/order-status/:id",authMiddleware,updateOrderStatus)
router.delete("/empty-cart",authMiddleware,emptyCart)
router.put("/password",authMiddleware,updatePassword)
router.get("/",getAllUser)
router.get("/refresh",handleRefreshToken)
router.get("/:id",authMiddleware,isAdmin,getAUser)
router.put("/edit-user",authMiddleware,isAdmin,updateUser)
router.put("/block-user/:id",authMiddleware,isAdmin,blockUser)
router.put("/unblock-user/:id",authMiddleware,isAdmin,unblockUser)

router.delete("/:id",deleteUser)
export default router;