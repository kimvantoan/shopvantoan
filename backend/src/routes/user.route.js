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
  usermiddleware,
} from "../middleware/auth.middleware.js";
import upload from "../middleware/multer.js";

const router = express.Router();

router.get("/", adminmiddleware, getAllUsers);
router.get("/:id", usermiddleware, getUserById);
router.patch("/:id", usermiddleware, upload.single("avatar"), updateUser);
router.delete("/:id",adminmiddleware, deleteUser);

export default router;
