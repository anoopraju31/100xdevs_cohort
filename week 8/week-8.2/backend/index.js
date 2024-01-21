const express = require('express')
const userRoutes = require('./routes/userRoutes.js')
const app = express()
const PORT = 5500

app.get('/', (req, res) => {
	res.json({ message: 'Welcome to PayTM clone' })
})

app.use('/users', userRoutes)

app.listen(PORT, () => {
	console.log(`server started at port ${PORT}.`)
})
