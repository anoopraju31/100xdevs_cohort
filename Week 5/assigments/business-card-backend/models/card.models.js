const mongoose = require('mongoose')

const InterestSchema = new mongoose.Schema({
	id: String,
	title: String,
})

const socialSchema = new mongoose.Schema({
	id: String,
	title: String,
	link: String,
})

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
		type: [InterestSchema],
		default: [],
	},
	socials: {
		type: [socialSchema],
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
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user',
	},
})

const Card = mongoose.model('card', CardSchema)

module.exports = Card
