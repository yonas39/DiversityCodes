const dotenv = require('dotenv');
const express = require('express');
const examRoutes = require('./routes/exams');

dotenv.config();
const app = express();

app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});

app.use('/server/exams', examRoutes);

app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT);
});
