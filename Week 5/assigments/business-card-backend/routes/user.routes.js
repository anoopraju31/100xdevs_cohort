const express = require('express')
const {
	signUpController,
	signInController,
} = require('../controllers/user.controllers.js')

const router = express.Router()

router.post('/sign-up', signUpController)
router.post('/sign-in', signInController)

module.exports = router
