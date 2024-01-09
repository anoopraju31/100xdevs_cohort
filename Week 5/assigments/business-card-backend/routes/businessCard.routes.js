const express = require('express')
const router = express.Router()
const Card = require('../models/card.models.js')

router.get('/', (req, res) => {
	Card({
		title: 'Tittle',
		description: 'Description',
		interests: ['interest 1', 'interest 2'],
		socials: ['http://www.google.com'],
	}).save()
	res.json({ message: 'business card route' })
})

module.exports = router
