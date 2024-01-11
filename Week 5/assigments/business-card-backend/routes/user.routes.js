const express = require('express')
const { signUpSchema, signInSchema } = require('../utills/validations.js')
const User = require('../models/user.models.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const router = express.Router()

const salt = parseInt(process.env.SALT_ROUNDS)
const secret = process.env.JWT_SECRET

router.get('/', (req, res) => {
	res.json({ message: 'user route' })
})

router.post('/sign-up', async (req, res) => {
	try {
		const { name, email, password } = req.body
		const validationResponse = signUpSchema.safeParse({ name, email, password })

		if (!validationResponse.success)
			return res.status(401).json(validationResponse.error.issues[0].message)

		const user = await User.findOne({ email })

		if (user) return res.status(400).json({ message: 'User already exists.' })

		const hashedPassword = await bcrypt.hash(password, salt)

		const newUser = new User({
			name,
			email,
			password: hashedPassword,
		})

		await newUser.save()

		res.json({ message: 'User created successfully.' })
	} catch (error) {
		console.error(error)

		res.status(500).json({ message: 'something went wrong' })
	}
})

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
