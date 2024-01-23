const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const mainRoutes = require('./routes/index')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI)

const app = express()
const PORT = process.env.PORT || 5500

app.use(cors())
app.use(express.json())
app.use('/api/v1', mainRoutes)

app.listen(PORT, () => {
	console.log(`server started at port ${PORT}.`)
})
