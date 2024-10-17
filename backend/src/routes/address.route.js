import { Router } from "express";
const router = Router();
import {
  createAddress,
  getAllAddresses,
  getAddressById,
  updateAddress,
  deleteAddress,
} from "../controllers/address.controller.js";
import { authmiddleware } from "../middleware/auth.middleware.js";

router.post("/", authmiddleware, createAddress);

router.get("/", authmiddleware, getAllAddresses);

router.get("/:id", authmiddleware, getAddressById);

router.patch("/:id", authmiddleware, updateAddress);

router.delete("/:id", authmiddleware, deleteAddress);

export default router;
