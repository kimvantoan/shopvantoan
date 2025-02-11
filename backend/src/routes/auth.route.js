import express from 'express';
import { register, login, logout,loginGoogle, resetPassword } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/googleLogin', loginGoogle)
router.post('/resetpassword', resetPassword);
router.post('/logout', logout);

export default router;