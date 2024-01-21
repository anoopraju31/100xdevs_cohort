const jwt = require('jsonwebtoken')
const { signupSchema } = require('../helpers/validations')
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

module.exports = {
	signUpController,
}
