const express = require('express')
const { authMiddleware } = require('../middlewares/authMiddleware')
const {
	signUpController,
	signInController,
	updateController,
} = require('../controllers/userControllers')

const router = express.Router()

router.post('/sign-up', signUpController)
router.post('/sign-in', signInController)
router.put('/', authMiddleware, updateController)
router.get('/bulk', authMiddleware, bulkUserController)

module.exports = router
