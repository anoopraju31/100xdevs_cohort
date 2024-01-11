const Card = require('../models/card.models.js')
const User = require('../models/user.models.js')
const { cardSchema } = require('../utills/validations.js')

const getBusinessCard = async (req, res) => {
	try {
		const userId = req.headers['user-id']
		const response = await User.findById(userId).populate('cards').exec()
		const { _id: id, name, email, cards } = response

		res.json({ status: 'success', id, name, email, cards })
	} catch (error) {
		console.error(error)

		res.status(500).json({ message: 'Something went wrong' })
	}
}

const createBusinessCard = async (req, res) => {
	try {
		const userId = req.headers['user-id']
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
			user: userId,
		})
		await newCard.save()

		const user = await User.findOne({ _id: userId })

		user?.cards?.push(newCard._id)
		await user.save()

		res.json({ status: 'success', message: 'successfully created new card.' })
	} catch (error) {
		console.error(error)

		res.status(500).json({ message: 'Something went wrong' })
	}
}

const editBusinessCard = async (req, res) => {
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

		await Card.updateOne(
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

		res.status(500).json({ message: 'Something went wrong' })
	}
}

const deleteBusinessCard = async (req, res) => {
	try {
		const id = req.params.id
		const card = await Card.findOneAndDelete({ _id: id })

		if (!card)
			return res.status(401).json({
				status: 'error',
				message: 'Card not found',
			})

		res.json({
			status: 'success',
			message: 'successfully deleted card.',
		})
	} catch (error) {
		console.error(error)

		res.status(500).json({ message: 'Something went wrong' })
	}
}

module.exports = {
	getBusinessCard,
	createBusinessCard,
	editBusinessCard,
	deleteBusinessCard,
}
