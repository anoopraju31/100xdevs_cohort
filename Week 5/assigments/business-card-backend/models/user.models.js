const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
		select: false,
	},
	cards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'card' }],
})

const User = mongoose.model('user', userSchema)

module.exports = User
