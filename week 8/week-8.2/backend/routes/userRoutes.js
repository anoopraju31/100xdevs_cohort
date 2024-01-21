const express = require('express')
const {
	signupSchema,
	signInSchema,
	updateSchema,
} = require('../helpers/validations')
const jwt = require('jsonwebtoken')
const { User } = require('../db')
const { authMiddleware } = require('../middlewares/authMiddleware')
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
			message: 'Incorrect inputs',
		})

	const existingUser = await User.findOne({
		username: req.body.username,
	})

	if (existingUser)
		return res.status(411).json({
			message: 'Email already taken',
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
		token,
	})
})

router.post('/sign-in', async (req, res) => {
	const { username, password } = req.body
	const { success } = signInSchema.safeParse(req.body)

	if (!success) return res.status(411).json({ message: 'Incorrect inputs' })

	const user = await User.findOne({
		username: req.body.username,
	})

	if (!user) return res.status(411).json({ message: 'Email not found' })
	if (password !== user.password)
		return res.status(411).json({ message: 'Incorrect password' })

	const userId = user._id
	const token = jwt.sign(
		{
			userId,
		},
		process.env.JWT_SECRET,
	)

	res.json({
		message: 'User successfully login',
		token,
	})
})

router.put('/', authMiddleware, async (req, res) => {
	const { success } = updateSchema.safeParse(req.body)

	if (!success)
		return res.status(411).json({ message: 'Error while updating information' })

	await User.updateOne({ _id: req.userId }, req.body)

	res.json({ message: 'Updated successfully' })
})

router.get('/bulk', authMiddleware, async (req, res) => {
	const filter = req.query.filter || ''
	const filteredUsers = await User.find({
		$or: [
			{
				firstName: {
					$regex: filter,
				},
			},
			{
				lastName: {
					$regex: filter,
				},
			},
		],
	})

	const users = filteredUsers.map(({ username, firstName, lastName, _id }) => ({
		username,
		firstName,
		lastName,
		_id,
	}))

	res.json({ users })
})

module.exports = router
