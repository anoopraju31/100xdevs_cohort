const express = require('express')
const { signInSchema } = require('../utills/validations.js')
const User = require('../models/user.models.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { signUpController } = require('../controllers/user.controllers.js')
require('dotenv').config()

const router = express.Router()
const secret = process.env.JWT_SECRET

router.post('/sign-up', signUpController)
router.post('/sign-in', async (req, res) => {
	try {
		const { email, password } = req.body
		const validationResponse = signInSchema.safeParse({ email, password })

		if (!validationResponse.success)
			return res.status(401).json(validationResponse.error.issues[0].message)

		const user = await User.findOne({ email }).select('+password')

		if (!user) return res.status(400).json({ message: 'User not found.' })

		const passwordMatch = await bcrypt.compare(password, user?.password)

		if (!passwordMatch)
			return res.status(403).json({ message: 'Invalid password' })

		const token = jwt.sign(
			{
				name: user.name,
				email,
				id: user._id.toString(),
			},
			secret,
			{ expiresIn: '30d' },
		)

		res.json({ message: 'successfully signed in.', token })
	} catch (error) {
		console.error(error)

		res.status(500).json({ message: 'something went wrong' })
	}
})

module.exports = router
