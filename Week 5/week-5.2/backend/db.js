const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
	title: {
		type: string,
		required: true,
	},
	description: {
		type: string,
		required: true,
	},
	completed: {
		type: boolean,
		required: true,
	},
})

const Todo = mongoose.model('todos', todoSchema)

module.exports = { Todo }
