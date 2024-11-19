require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/routes')

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (err) => {
    console.error(err)
})

database.on('connected', () => {
    console.log('Database Conected')
})

const app = express()

app.use(express.json())

app.use('/api', routes)

app.listen(3000, () => {
    console.log('Server')
})