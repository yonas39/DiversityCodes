const express = require('express');
const Exam = require('../models/ExamSchema'); 
const mongoose = require('mongoose');
const router = express.Router();
const { 
    createExam,
    getAllExams,
    getExamById,
    getExamsByPatientId
} = require('../controllers/exam');

router.get('/', getAllExams)

router.get('/:id', getExamById)

router.get('/:id', getExamsByPatientId)

router.post('/', createExam);

router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a exam'})
});

router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a exam'})
});

module.exports = router;
