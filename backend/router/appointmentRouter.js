import express from "express"
import { deleteAppointment, getAllAppointments, postAppointment, updateStatus } from "../controller/appointmentController.js";
import { isAdmin, isPatient } from "../middlewares/auth.js";

const router = express.Router();
router.post("/post",isPatient, postAppointment)
router.get("/getall",isAdmin, getAllAppointments)
router.put("/update/:id",isAdmin, updateStatus)
router.delete("/delete/:id", isAdmin, deleteAppointment)

export default router;