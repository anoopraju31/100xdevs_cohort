const express = require('express')
const { createTodo } = require('./type')
require('dotenv').config()

const app = express()
const PORT = 5500

app.use(express.json())

app.get('/todo', (req, res) => {})

app.post('/todo', (req, res) => {
	const { title, description } = req.body
	const validate = createTodo.safeParse({ title, description })

	if (!validate.success)
		return res.status(411).json({ message: 'You sent the wrong inputs' })
})

app.put('/completed', (req, res) => {})

app.listen(PORT, () => {
	console.log(`Server started at port ${PORT}`)
})
