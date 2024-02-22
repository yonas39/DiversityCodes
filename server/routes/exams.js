import { getAllExams } from "../controllers/exam.js"
import { getExamById } from "../controllerss/exam.js"

router.get("/exams", getAllExams)
router.get("/exams/patient/:examId", getExamById)
