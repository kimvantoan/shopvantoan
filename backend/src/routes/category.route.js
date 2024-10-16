import { Router } from 'express';
const router = Router();
import { createCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory } from '../controllers/category.controller.js';
import { adminmiddleware } from '../middleware/auth.middleware.js';

router.post('/',adminmiddleware, createCategory);
router.get('/', getAllCategories);
router.get('/:id', getCategoryById);
router.put('/:id', adminmiddleware,updateCategory);
router.delete('/:id', adminmiddleware,deleteCategory);

export default router;