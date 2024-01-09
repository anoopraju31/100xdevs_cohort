const express = require('express')
const Card = require('../models/card.models.js')
const cardSchema = require('../utills/validations.js')

const router = express.Router()

router.get('/', async (req, res) => {
	try {
		const cards = await Card.find()

		res.json({ status: 'success', cards })
	} catch (error) {
		console.error(error)

		res.status(500).json({ message: 'something went wrong' })
	}
})

router.post('/create', async (req, res) => {
	try {
		const { name, description, interests, socials } = req.body

		const validationResponse = cardSchema.safeParse({
			name,
			description,
			interests,
			socials,
		})

		if (!validationResponse.success)
			return res.status(401).json({
				status: 'error',
				message: validationResponse.error.issues[0].message,
			})

		const newCard = new Card({
			name,
			description,
			interests,
			socials,
		})
		await newCard.save()

		res.json({ status: 'success', message: 'successfully created new card.' })
	} catch (error) {
		console.error(error)

		res.status(500).json({ message: 'something went wrong' })
	}
})

router.put('/:id', async (req, res) => {
	try {
		const id = req.params.id

		const card = await Card.findOne({ _id: id })

		if (!card) {
			return res.status(401).json({
				status: 'error',
				message: 'Card not found',
			})
		}

		const { name, description, interests, socials } = req.body

		const validationResponse = cardSchema.safeParse({
			name,
			description,
			interests,
			socials,
		})

		if (!validationResponse.success)
			return res.status(401).json({
				status: 'error',
				message: validationResponse.error.issues[0].message,
			})

		const updatedCard = await Card.updateOne(
			{ _id: id },
			{
				name,
				description,
				interests,
				socials,
			},
		)

		res.json({
			status: 'success',
			message: 'successfully updated card.',
		})
	} catch (error) {
		console.error(error)

		res.status(500).json({ message: 'something went wrong' })
	}
})

module.exports = router
