require('dotenv').config()
const router = require('./src/routes/index')
const express = require('express')
const app = express()

app.use(express.json())
app.use('/api', router)

module.exports = app
