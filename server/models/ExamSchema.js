const mongoose = require("mongoose")

const ExamSchema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	patientId: String,
	age: Number,
	sex: String,
	zipCode: String,
	bmi: Number,
	latestWeight: Number,
	examId: String,
	keyFindings: String,
	brixiaScores: String,
	imageURL: String,
	ICU_Admit: String,
	numberOfAdmits: Number,
	mortality: String,
	keyFindings: String,
	additionalNotes: String,
})

module.exports = mongoose.model("MGHData", ExamSchema, "MGHData")
