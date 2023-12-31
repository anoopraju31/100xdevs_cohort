const express = require('express')
const app = express()
const PORT = 5500

app.use(express.json())

app.get('/todo', (req, res) => {})

app.post('/todo', (req, res) => {})

app.put('/completed', (req, res) => {})

app.listen(PORT, () => {
	console.log(`Server started at port ${PORT}`)
})
