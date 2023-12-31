const express = require('express')
const { createTodo, updateTodo } = require('./type')
const { Todo } = require('./db')
const cors = require('cors')

const app = express()
const PORT = 5500

app.use(cors())
app.use(express.json())

app.get('/todo', async (req, res) => {
	const todos = await Todo.find()

	res.json(todos)
})

app.post('/todo', async (req, res) => {
	const { title, description } = req.body
	const validate = createTodo.safeParse({ title, description })

	if (!validate.success)
		return res.status(411).json({ message: 'You sent the wrong inputs' })

	const todo = new Todo({
		title,
		description,
		completed: false,
	})

	await todo.save()

	res.json({
		message: 'Successfully created todo',
		todo,
	})
})

app.put('/completed', async (req, res) => {
	const id = req.body.id
	const validation = updateTodo.safeParse({ id })

	if (!validation.success)
		return res.status(411).json({ message: 'You sent the wrong inputs' })

	await Todo.updateOne(
		{
			_id: id,
		},
		{
			completed: true,
		},
	)
	res.json({
		msg: 'Todo marked as completed',
	})
})

app.listen(PORT, () => {
	console.log(`Server started at port ${PORT}`)
})
