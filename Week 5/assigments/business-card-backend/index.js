const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const businessCardRouter = require('./routes/businessCard.routes.js')
const userRouter = require('./routes/user.routes.js')

const app = express()
const PORT = 5500
const MONGODB_CONNECTION_URL = process.env.MONGODB_CONNECTION_URL

mongoose.connect(MONGODB_CONNECTION_URL)

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
	res.json({ message: 'Welcome to Business Card App' })
})

app.use('/users', userRouter)
app.use('/business-card', businessCardRouter)

app.listen(PORT, () => {
	console.log(`Server started at port ${PORT}.`)
})
