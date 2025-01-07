import { Router } from "express";
import { authenticate, authorized } from "../middlewares/authMiddleware.js";
import { getUserDetails, getUsersList, updateUserDetails } from "../controllers/adminController.js";

const router = Router();

router.get("/users", authenticate, authorized('admin'), getUsersList);
router.get("/users/:userId", authenticate, authorized('admin'), getUserDetails);
router.put("/users/:userId", authenticate, authorized('admin'), updateUserDetails);

export default router;