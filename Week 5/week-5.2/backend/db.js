const mongoose = require('mongoose')
require('dotenv').config()

const connectionUri = process.env.MONGO_CONNECTION_URI

mongoose.connect(connectionUri)

const todoSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	completed: {
		type: Boolean,
		required: true,
	},
})

const Todo = mongoose.model('todos', todoSchema)

module.exports = { Todo }
