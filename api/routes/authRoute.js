import express, { application } from "express";
import { applyCoupon, blockUser, createOrder, createUser, deleteUser, emptyCart, forgotPasswordToken, getAUser, getAllOrders, getAllUser, getOrderByUserId, getOrders, getUserCart, handleRefreshToken, loginAdmin, loginUser, logoutUser, resetPassword, unblockUser, updateOrderStatus, updatePassword, updateUser, userCart } from "../controllers/authCtrl.js";
import { authMiddleware,isAdmin } from "../middleware/authMiddleware.js";
const router=express.Router();

router.post("/register",createUser);

router.post("/login",loginUser)
router.post("/admin-login", loginAdmin);
router.get("/logout",logoutUser);
router.post("/forgot-password-token",forgotPasswordToken)
router.put("/reset-password/:token",resetPassword)
router.post("/cart",authMiddleware,userCart);
router.get("/cart",authMiddleware,getUserCart)
router.post("/cart/cash-order",authMiddleware,createOrder)
router.post("/applycoupon",authMiddleware,applyCoupon)
router.get("/get-orders",authMiddleware,getOrders)
router.get("/getAllOrders",authMiddleware,isAdmin,getAllOrders)
router.get("/get-order/:id",authMiddleware,isAdmin,getOrderByUserId)
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