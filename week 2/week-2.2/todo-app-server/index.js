const express = require('express')
const fs = require('fs/promises')

const app = express()
const PORT = 5500

app.use(express.json())

app.get('/', async (req, res) => {
	try {
		const data = await fs.readFile('todo.json', 'utf-8')
		const { todos } = await JSON.parse(data)

		console.log(todos)

		return res.json({
			status: 200,
			todos,
		})
	} catch (error) {
		console.error(error.message)

		return res.status(500).json({
			status: 500,
			message: 'todo not found.',
		})
	}
})

app.post('/', async (req, res) => {
	const { todo } = req.body

	try {
		const data = await fs.readFile('todo.json', 'utf-8')
		const jsonData = await JSON.parse(data)

		jsonData.todos.push(todo)

		const stringifiedData = JSON.stringify(jsonData)

		fs.writeFile('todo.json', stringifiedData, 'utf-8')
			.then(() => {
				return res.json({
					status: 200,
					message: 'todo created successfully.',
				})
			})
			.catch((error) => {
				console.error(error.message)

				return res.status(500).json({
					status: 500,
					message: 'unable to add todo.',
				})
			})
	} catch (error) {
		console.error(error.message)

		return res.status(500).json({
			status: 500,
			message: 'todo not found.',
		})
	}
})

app.listen(PORT, () => {
	console.log(`Server started at port ${PORT}.`)
})
