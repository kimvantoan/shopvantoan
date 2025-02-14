import express from "express";
import {
  register,
  login,
  logout,
  loginGoogle,
  resetPassword,
  forgotPassword,
  changePassword,
  verify_OTP,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/googleLogin", loginGoogle);
router.post("/logout", logout);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);
router.post("/change-password", changePassword);
router.post("/verify-otp", verify_OTP);
export default router;
