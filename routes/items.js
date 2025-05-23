
import express from "express";
import { createItem, getItems, getItem, updateItem, deleteItem } from "../controllers/itemController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/", protect, createItem);
router.get("/", getItems);
router.get("/:id", getItem);
router.put("/:id", protect, updateItem);
router.delete("/:id", protect, deleteItem);

export default router;