const express = require('express')
const Card = require('../models/card.models.js')
const cardSchema = require('../utills/validations.js')
const {
	getBusinessCard,
	editBusinessCard,
	createBusinessCard,
} = require('../controllers/businessCard.controllers.js')

const router = express.Router()

router.get('/', getBusinessCard)
router.post('/create', createBusinessCard)
router.put('/:id', editBusinessCard)

router.delete('/:id', async (req, res) => {
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
})

module.exports = router
