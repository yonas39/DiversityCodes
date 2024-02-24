const Exam = require("../models/ExamSchema");
const mongoose = require('mongoose');

const getAllExams = async (req, res) => {
    try {
        const exams = await Exam.find({}).sort({ createdAt: -1 });
        res.status(200).json(exams);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getExamById = async (req, res) => {
	const { id } = req.params
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({error: "No such exam"})
	}
	try {
		const exam = await Exam.findById(id)
		if (!exam) {
			return res.status(404).json({ message: "Exam not found" })
		}
		res.status(200).json(exam)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}
const getExamsByPatientId = async (req, res) => {
	const { patientId } = req.params
	console.log(`Fetching exams for patientId: ${patientId}`)
	try {
		const exams = await Exam.find({ patientId })
		console.log(`Found ${exams.length} exams for patientId: ${patientId}`)
		if (!exams) {
			return res.status(404).json({ message: "Exams not found" })
		}
		res.status(200).json(exams)
	} catch (error) {
		console.error(`Error fetching exams for patientId: ${patientId}`, error)
		res.status(500).json({ message: error.message })
	}
}

const createExam = async (req, res) => {
	const { patientId, age, sex, zipCode, bmi, examId, keyFindings, brixiaScores, imageURL } = req.body;
    try {
        const exam = await Exam.create({
            _id: new mongoose.Types.ObjectId(),
            patientId,
            age,
            sex,
            zipCode,
            bmi,
            examId,
            keyFindings,
            brixiaScores,
            imageURL
        });
        res.status(200).json(exam);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const deleteExam = async (req, res) => {
	const { id } = req.params
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({error: "No such exam"})
	}
	const exam = await Exam.findByIdAndDelete({_id: id})
	if (!exam) {
		return res.status(400).json({ message: "Exam not found" })
	}
	res.status(200).json(exam)
}

const updateExam = async (req, res) => {
	const { id } = req.params
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({error: "No such exam"})
	}
	const exam = await Exam.findByIdAndUpdate({_id: id}, {
		...req.body
	}) 
	if (!exam) {
		return res.status(400).json({ message: "Exam not found" })
	}
	res.status(200).json(exam)
}

module.exports = {
	createExam,
	getAllExams, 
	getExamById,
	getExamsByPatientId,
	deleteExam,
	updateExam
}