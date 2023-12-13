const express = require('express')

const app = express()
const PORT = 5500

const todos = []

app.use(express.json())

app.get('/', (req, res) => {
	res.json({
		status: 200,
		todos,
	})
})

app.post('/', (req, res) => {
	const { todo } = req.body

	todos.push(todo)

	res.json({
		status: 200,
		message: 'todo created successfully.',
	})
})

app.listen(PORT, () => {
	console.log(`Server started at port ${PORT}.`)
})
