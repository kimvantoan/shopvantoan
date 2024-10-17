import express from "express";
import {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";
import {
  adminmiddleware,
  authmiddleware,
} from "../middleware/auth.middleware.js";
import upload from "../middleware/multer.js";

const router = express.Router();

router.get("/", adminmiddleware, getAllUsers);
router.get("/:id", authmiddleware, getUserById);
router.patch("/:id", authmiddleware, upload.single("avatar"), updateUser);
router.delete("/:id",authmiddleware, deleteUser);

export default router;
