const express = require('express');
const Exam = require('../models/ExamSchema'); 
const mongoose = require('mongoose')
const router = express.Router();

router.get('/', (req, res) => {
    res.json({mssg: 'GET all exams'})
});

router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single exam'})
});

router.post('/', async (req, res) => {
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
});

router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a exam'})
});

router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a exam'})
});

module.exports = router;
