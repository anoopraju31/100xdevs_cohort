const express = require('express')
const {
	getBusinessCard,
	editBusinessCard,
	createBusinessCard,
	deleteBusinessCard,
} = require('../controllers/businessCard.controllers.js')
const authMiddleware = require('../middlewares/auth.middlewares.js')

const router = express.Router()

router.get('/', authMiddleware, getBusinessCard)
router.post('/create', authMiddleware, createBusinessCard)
router.put('/:id', authMiddleware, editBusinessCard)
router.delete('/:id', authMiddleware, deleteBusinessCard)

module.exports = router
