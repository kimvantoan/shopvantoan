import { Router } from 'express';
const router = Router();
import { createCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory } from '../controllers/category.controller.js';
import { adminmiddleware } from '../middleware/auth.middleware.js';
import upload from "../middleware/multer.js";
router.post('/',adminmiddleware,upload.single('image'), createCategory);
router.get('/', getAllCategories);
router.get('/:id', getCategoryById);
router.put('/:id', adminmiddleware,upload.single('image'),updateCategory);
router.delete('/:id', adminmiddleware,deleteCategory);

export default router;