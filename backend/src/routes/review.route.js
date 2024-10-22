import { Router } from "express";
const router = Router();
import {
  createReview,
  deleteReview,
  getMyReview,
  getReviewByProduct,
  updateReview,
} from "../controllers/review.controller.js";
import { authmiddleware } from "../middleware/auth.middleware.js";
router.post("/", authmiddleware, createReview);

router.get("/:id", getReviewByProduct);

router.get("/", authmiddleware, getMyReview);

router.patch("/:id", authmiddleware, updateReview);

router.delete("/:id",authmiddleware, deleteReview);

export default router;
