const Card = require('../models/card.models.js')
const cardSchema = require('../utills/validations.js')

const getBusinessCard = async (req, res) => {
	try {
		const cards = await Card.find()

		res.json({ status: 'success', cards })
	} catch (error) {
		console.error(error)

		res.status(500).json({ message: 'Something went wrong' })
	}
}

module.exports = {
	getBusinessCard,
}
