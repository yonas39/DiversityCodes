require('dotenv').config()

const express = require('express')

// creates express app
const app = express()

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// react to requests (routes handler)
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to our MERN stack application!'})
})

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})

