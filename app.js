require('dotenv').config()

const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))

const router = require('./src/routes/index')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', router)
module.exports = app
