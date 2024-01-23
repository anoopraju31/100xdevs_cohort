const {
	signUpSchema,
	signInSchema,
	updateSchema,
} = require('../helpers/validations')
const User = require('../models/user.models')
const Account = require('../models/acount.models')
const {
	generateHashedPassword,
	comparePasswords,
} = require('../helpers/encrypt')
const { generateToken } = require('../helpers/jwt')

const signUpController = async (req, res) => {
	try {
		const { username, firstName, lastName, password } = req.body
		const { error } = signUpSchema.safeParse(req.body)

		if (error)
			return res.status(411).json({
				status: 'error',
				message: error.issues[0].message,
			})

		const existingUser = await User.findOne({ username })

		if (existingUser)
			return res.status(411).json({ message: 'Email already taken' })

		const hashedPassword = await generateHashedPassword(password)
		const user = await User.create({
			username,
			password: hashedPassword,
			firstName,
			lastName,
		})
		const userId = user._id

		await Account.create({
			userId,
			balance: 1 + Math.ceil(Math.random() * 1000000),
		})

		const token = generateToken(userId)

		res.json({
			message: 'Successfully signed up',
			id: userId,
			username,
			firstName,
			lastName,
			token,
			auth: true,
		})
	} catch (error) {
		console.error(error)

		res.status(500).json({ status: 'error', message: 'something went wrong' })
	}
}

const signInController = async (req, res) => {
	try {
		const { username, password } = req.body
		const { error } = signInSchema.safeParse(req.body)

		if (error)
			return res.status(411).json({
				status: 'error',
				message: error.issues[0].message,
			})

		const user = await User.findOne({ username }).select('+password')

		if (!user) return res.status(411).json({ message: 'Email not found' })

		const { _id: id, firstName, lastName } = user
		const isValidPassword = await comparePasswords(password, user.password)

		if (!isValidPassword)
			return res.status(411).json({ message: 'Incorrect password' })

		const token = generateToken(user._id)

		res.json({
			message: 'User successfully login',
			id,
			username,
			firstName,
			lastName,
			token,
			auth: true,
		})
	} catch (error) {
		console.error(error)

		res.status(500).json({ status: 'error', message: 'something went wrong' })
	}
}

const updateController = async (req, res) => {
	try {
		const { error } = updateSchema.safeParse(req.body)

		if (error)
			return res.status(411).json({
				status: 'error',
				message: error.issues[0].message,
			})

		const user = await User.updateOne({ _id: req.userId }, req.body)
		const { _id: id, username, firstName, lastName } = user

		res.json({
			message: 'Updated successfully',
			id,
			username,
			firstName,
			lastName,
		})
	} catch (error) {
		console.error(error)

		res.status(500).json({ status: 'error', message: 'something went wrong' })
	}
}

const bulkUserController = async (req, res) => {
	try {
		const filter = req.query.filter || ''
		const filteredUsers = await User.find({
			$or: [
				{ firstName: { $regex: filter } },
				{ lastName: { $regex: filter } },
			],
		})
		const users = filteredUsers.map(
			({ username, firstName, lastName, _id }) => ({
				username,
				firstName,
				lastName,
				_id,
			}),
		)

		res.json({ users })
	} catch (error) {
		console.error(error)

		res.status(500).json({ status: 'error', message: 'something went wrong' })
	}
}

const userController = async (req, res) => {
	try {
		const user = await User.findOne({ _id: req.userId })

		res.json(user)
	} catch (error) {
		console.error(error)

		res.status(500).json({ status: 'error', message: 'something went wrong' })
	}
}

module.exports = {
	signUpController,
	signInController,
	updateController,
	bulkUserController,
	userController,
}
