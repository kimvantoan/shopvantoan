import { Router } from "express";
const router = Router();
import {
  createCart,
  getCartByUserId,
  deleteCart,
  removeProductFromCart,
  updateProductQuantity,
  addProductToCart
} from "../controllers/cart.controller.js";
import { authmiddleware } from "../middleware/auth.middleware.js";

router.post("/",authmiddleware, createCart);
router.get("/",authmiddleware, getCartByUserId);
router.delete("/:id", authmiddleware,deleteCart);
router.delete("/remove",authmiddleware, removeProductFromCart);
router.put("/update",authmiddleware, updateProductQuantity);
router.post("/add",authmiddleware, addProductToCart);

export default router;
