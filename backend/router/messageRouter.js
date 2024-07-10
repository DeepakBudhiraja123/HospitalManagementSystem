import express from "express"
import { getAllMessages, sendMessage } from "../controller/messageController.js";
import { isAdmin } from "../middlewares/auth.js";

const router = express.Router();

router.post("/send", sendMessage);
router.get("/getall",isAdmin, getAllMessages)
export default router;
