import express from "express"
import {
	createExam,
	getAllExams,
	getExamById,
	getExamsByPatientId,
	deleteExam,
	updateExam,
} from "../controllers/exam.js"

const router = express.Router()

router.get("/", getAllExams)
router.get("/:id", getExamsByPatientId)
router.post("/", createExam)
router.delete("/:id", deleteExam)
router.patch("/:id", updateExam)
router.get("/patient/:examId", getExamById)

export default router
// Define a route for getting a specific exam by its ID
// When this file is used with '/api/exams' in app.js, this route will be '/api/exams/patient/:examId'

// createExam,
// 	getAllExams,
// 	getExamById,
// 	getExamsByPatientId,
// 	deleteExam,
// 	updateExam,
