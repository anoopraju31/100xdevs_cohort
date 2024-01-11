const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const businessCardRouter = require('./routes/businessCard.routes.js')
const userRouter = require('./routes/user.routes.js')
require('dotenv').config()

const app = express()
const PORT = 5500
const MONGODB_CONNECTION_URL = process.env.MONGODB_CONNECTION_URL

mongoose.connect(MONGODB_CONNECTION_URL)

app.use(cors())
app.use(express.json())
app.use('/users', userRouter)
app.use('/business-card', businessCardRouter)

app.listen(PORT, () => console.log(`Server started at port ${PORT}.`))
