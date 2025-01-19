import { Router } from "express";
const router = Router();
import {
  createCart,
  getCartByUserId,
  removeProductbyId,
  updateProductQuantity,
  addProductToCart
} from "../controllers/cart.controller.js";
import { authmiddleware } from "../middleware/auth.middleware.js";

router.post("/",authmiddleware, createCart);
router.get("/",authmiddleware, getCartByUserId);
router.delete("/:id",authmiddleware, removeProductbyId);
router.put("/update/:id",authmiddleware, updateProductQuantity);
router.post("/add",authmiddleware, addProductToCart);

export default router;
