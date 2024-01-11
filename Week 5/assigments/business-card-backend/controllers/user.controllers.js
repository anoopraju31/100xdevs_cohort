const { signUpSchema } = require('../utills/validations.js')
const User = require('../models/user.models.js')
const bcrypt = require('bcrypt')
require('dotenv').config()

const salt = parseInt(process.env.SALT_ROUNDS)

const signUpController = async (req, res) => {
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
}

module.exports = {
	signUpController,
}
