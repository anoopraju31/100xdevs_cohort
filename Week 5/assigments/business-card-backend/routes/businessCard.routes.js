const express = require('express')
const {
	getBusinessCard,
	editBusinessCard,
	createBusinessCard,
	deleteBusinessCard,
} = require('../controllers/businessCard.controllers.js')

const router = express.Router()

router.get('/', getBusinessCard)
router.post('/create', createBusinessCard)
router.put('/:id', editBusinessCard)
router.delete('/:id', deleteBusinessCard)

module.exports = router
