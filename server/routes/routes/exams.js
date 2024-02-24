import { getAllExams } from "../controllers/exam.js"
import { getExamId } from "../controllers/exam.js"

router.get("/exams", getAllExams)
router.get("/exams/:examId", getExamById);
