const express = require('express');
const Exam = require('../models/ExamSchema'); 
const mongoose = require('mongoose');
const router = express.Router();
const { 
    createExam,
    getAllExams,
    getExamById,
    getExamsByPatientId,
    deleteExam,
    updateExam
} = require('../controllers/exam');

router.get('/', getAllExams)

router.get('/:id', getExamById)

router.get('/:id', getExamsByPatientId)

router.post('/', createExam);

router.delete('/:id', deleteExam)

router.patch('/:id', updateExam)

module.exports = router;
