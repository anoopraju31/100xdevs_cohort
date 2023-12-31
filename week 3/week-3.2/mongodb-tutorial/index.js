const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_CONNECTION_URL)

const User = mongoose.model('Users', {
	name: String,
	username: String,
	password: String,
})

const app = express()
const PORT = 5500
const jwtSecret = process.env.JWT_SECRET

async function userExists(username) {
	const existingUser = await User.findOne({ username })

	return existingUser
}

app.use(express.json())

app.get('/', (req, res) => {
	res.json({
		message: "Anoop's server started!",
	})
})

app.post('/signup', async (req, res) => {
	const name = req.body.name
	const username = req.body.username
	const password = req.body.password

	const existingUser = await userExists(username)

	if (existingUser) {
		return res.status(400).json({
			message: 'username already exists',
		})
	}

	const user = new User({
		name,
		username,
		password,
	})

	user.save()

	res.json({
		message: 'user created successfully',
	})
})

app.post('/signin', async (req, res) => {
	const username = req.body.username
	const password = req.body.password

	const user = await userExists(username)

	if (!user) {
		return res.status(400).json({
			message: 'username does not exists',
		})
	}

	if (user.password !== password) {
		return res.status(400).json({
			message: 'invalid password',
		})
	}

	const name = user.name
	const id = user._id

	const token = jwt.sign({ name, username, id }, jwtSecret)

	res.json({
		token,
	})
})

app.get('/protected-route', (req, res) => {
	const token = req.headers.authorization

	try {
		const decoded = jwt.verify(token, jwtSecret)
		const username = decoded.username
		const name = decoded.name
		const id = decoded.id

		res.json({
			username,
			name,
			id,
		})
	} catch (err) {
		return res.status(403).json({
			msg: 'Invalid token',
		})
	}
})

app.listen(PORT, () => {
	console.log(`Server started at port ${PORT}.`)
})
