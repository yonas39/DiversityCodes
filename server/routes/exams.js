const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({mssg: 'GET all exams'})
});

router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single exam'})
});

router.post('/', (req, res) => {
    res.json({mssg: 'POST a new exam'})
});

router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a exam'})
});

router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a exam'})
});

module.exports = router;
