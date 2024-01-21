const jwt = require('jsonwebtoken')
const {
	signupSchema,
	signInSchema,
	updateSchema,
} = require('../helpers/validations')
const { User } = require('../db')
require('dotenv').config()

const signUpController = async (req, res) => {
	const { username, firstName, lastName, password } = req.body
	const { success } = signupSchema.safeParse(req.body)

	if (!success) return res.status(411).json({ message: 'Incorrect inputs' })

	const existingUser = await User.findOne({ username })

	if (existingUser)
		return res.status(411).json({ message: 'Email already taken' })

	const user = await User.create({ username, password, firstName, lastName })
	const userId = user._id
	const token = jwt.sign({ userId }, process.env.JWT_SECRET)

	res.json({ message: 'User created successfully', token })
}

const signInController = async (req, res) => {
	const { username, password } = req.body
	const { success } = signInSchema.safeParse(req.body)

	if (!success) return res.status(411).json({ message: 'Incorrect inputs' })

	const user = await User.findOne({ username })

	if (!user) return res.status(411).json({ message: 'Email not found' })
	if (password !== user.password)
		return res.status(411).json({ message: 'Incorrect password' })

	const userId = user._id
	const token = jwt.sign({ userId }, process.env.JWT_SECRET)

	res.json({ message: 'User successfully login', token })
}

const updateController = async (req, res) => {
	const { success } = updateSchema.safeParse(req.body)

	if (!success)
		return res.status(411).json({ message: 'Error while updating information' })

	await User.updateOne({ _id: req.userId }, req.body)

	res.json({ message: 'Updated successfully' })
}

const bulkUserController = async (req, res) => {
	const filter = req.query.filter || ''
	const filteredUsers = await User.find({
		$or: [{ firstName: { $regex: filter } }, { lastName: { $regex: filter } }],
	})
	const users = filteredUsers.map(({ username, firstName, lastName, _id }) => ({
		username,
		firstName,
		lastName,
		_id,
	}))

	res.json({ users })
}

module.exports = {
	signUpController,
	signInController,
	updateController,
	bulkUserController,
}
