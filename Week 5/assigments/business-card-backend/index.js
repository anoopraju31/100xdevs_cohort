const express = require('express')

const app = express()
const PORT = 5500

app.get('/', (req, res) => {
	res.json({ message: 'Welcome to Business Card App' })
})

app.listen(PORT, () => {
	console.log(`Server started at port ${PORT}.`)
})
