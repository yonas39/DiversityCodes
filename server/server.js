const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const examRoutes = require('./routes/exams');

dotenv.config();
const app = express();

// Enable All CORS Requests
app.use(cors());

app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});

app.use('/server/exams', examRoutes);

// connect to db
mongoose.connect(process.env.DB_STRING)
    .then(() =>{
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port', process.env.PORT);
        })
    })
    .catch((error) => {
        console.log(error)
    })

module.exports = app;