import { Router } from "express";
import { router as authRouter } from "./features/auth/routes";

export const router = Router();

router.use("/", authRouter);

export default router;
