const express = require('express')
const businessCardRouter = require('./routes/businessCard.routes')

const app = express()
const PORT = 5500

app.get('/', (req, res) => {
	res.json({ message: 'Welcome to Business Card App' })
})

app.use('/business-card', businessCardRouter)

app.listen(PORT, () => {
	console.log(`Server started at port ${PORT}.`)
})
