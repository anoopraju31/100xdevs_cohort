const express = require('express')
const businessCardRouter = require('./routes/businessCard.routes')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const PORT = 5500
const MONGODB_CONNECTION_URL = process.env.MONGODB_CONNECTION_URL

mongoose.connect(MONGODB_CONNECTION_URL)

app.use(express.json())
app.get('/', (req, res) => {
	res.json({ message: 'Welcome to Business Card App' })
})

app.use('/business-card', businessCardRouter)

app.listen(PORT, () => {
	console.log(`Server started at port ${PORT}.`)
})
