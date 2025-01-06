import { Router } from "express";
import { profileDetails } from "../controllers/userController.js";
import { authenticate, authorized } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/profile", authenticate, authorized('user'), profileDetails);

export default router;