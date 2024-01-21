const express = require('express')
const {
	signupSchema,
	signInSchema,
	updateSchema,
} = require('../helpers/validations')
const jwt = require('jsonwebtoken')
const { User } = require('../db')
const { authMiddleware } = require('../middlewares/authMiddleware')
const { signUpController } = require('../controllers/userControllers')
require('dotenv').config()

const router = express.Router()

router.post('/sign-up', signUpController)

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
