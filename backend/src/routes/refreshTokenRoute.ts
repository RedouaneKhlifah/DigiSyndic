import { Router } from "express";
import refreshTokenController from "../controllers/refreshTokenController";

const router = Router();

router.post("/", refreshTokenController);

export default router;
