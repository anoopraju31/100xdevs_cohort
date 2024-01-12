const mongoose = require('mongoose')

const InterestSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
})

const socialSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	link: {
		type: String,
		required: true,
	},
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
