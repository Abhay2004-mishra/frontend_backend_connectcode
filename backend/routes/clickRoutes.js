import express from "express";
import { trackClick } from "../controllers/clickController.js";

const router = express.Router();

router.get("/:id", trackClick);

export default router;
