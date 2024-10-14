import { Router } from "express";
const router = Router();
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";
import upload from "../middleware/multer.js";

router.post(
  "/",
  upload.array("images", 10),
  createProduct
);
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.patch(
  "/:id",
  upload.array("images", 10),
  updateProduct
);
router.delete("/:id", deleteProduct);

export default router;
