import express from "express";
import {
  getTools,
  getToolBySlug,
  createTool,
} from "../controllers/toolController.js";

const router = express.Router();

router.get("/", getTools);
router.get("/:slug", getToolBySlug);
router.post("/", createTool); // admin later

export default router;
