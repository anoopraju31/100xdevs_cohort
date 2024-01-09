const mongoose = require('mongoose')

const CardSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	interests: {
		type: [String],
		default: [],
	},
	socials: {
		type: [String],
		default: [],
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	lastEditedAt: {
		type: Date,
		default: Date.now,
	},
})

const Card = mongoose.model('card', CardSchema)

module.exports = Card
