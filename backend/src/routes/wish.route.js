import { Router } from "express";

const router = Router();

import {
    addWish,
    deleteWish,
    getWish
} from "../controllers/wish.controller.js";
import { authmiddleware } from "../middleware/auth.middleware.js";

router.post("/", authmiddleware, addWish);
router.delete("/:id", authmiddleware, deleteWish);  
router.get("/", authmiddleware, getWish);

export default router;