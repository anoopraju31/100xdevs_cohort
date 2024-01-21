const express = require('express')
const { signupSchema } = require('../helpers/validations')
const jwt = require('jsonwebtoken')
const { User } = require('../db')
require('dotenv').config()

const router = express.Router()

router.get('/', (req, res) => {
	res.json({ message: 'user routes' })
})

router.post('/sign-up', async (req, res) => {
	const { username, firstName, lastName, password } = req.body
	const { success } = signupSchema.safeParse(req.body)

	if (!success)
		return res.status(411).json({
			message: 'Email already taken / Incorrect inputs',
		})

	const existingUser = await User.findOne({
		username: req.body.username,
	})

	if (existingUser)
		return res.status(411).json({
			message: 'Email already taken/Incorrect inputs',
		})

	const user = await User.create({
		username,
		password,
		firstName,
		lastName,
	})
	const userId = user._id
	const token = jwt.sign(
		{
			userId,
		},
		process.env.JWT_SECRET,
	)

	res.json({
		message: 'User created successfully',
		token: token,
	})
})

module.exports = router
