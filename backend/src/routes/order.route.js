import { Router } from "express";
const router = Router();
import {
  createOrder,
  getAllOrders,
  getOrderById,
  deleteOrder,
  getMyOrders,
  updateStatusOrder,
} from "../controllers/order.controller.js";
import {
  authmiddleware,
  adminmiddleware,
} from "../middleware/auth.middleware.js";

router.post("/",authmiddleware, createOrder); 
router.get("/all", adminmiddleware, getAllOrders); 
router.get("/", authmiddleware, getMyOrders); 
router.get("/:id",authmiddleware, getOrderById);
router.patch("/:id", authmiddleware,updateStatusOrder);
router.delete("/:id", adminmiddleware,deleteOrder);

export default router;
