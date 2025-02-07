import { Router } from "express";
const router = Router();
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";
import upload from "../middleware/multer.js";
import { adminmiddleware } from "../middleware/auth.middleware.js";

router.post("/", adminmiddleware, upload.array("images", 10), createProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);
router.patch(
  "/:id",
  adminmiddleware,
  upload.array("images", 10),
  updateProduct
);
router.delete("/:id", adminmiddleware, deleteProduct);

export default router;
