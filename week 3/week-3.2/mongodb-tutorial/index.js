const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_CONNECTION_URL)

const User = mongoose.model('Users', {
	name: String,
	username: String,
	password: String,
})

const app = express()
const PORT = 5500

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

	const existingUser = await User.findOne({ username })

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

app.post('/signin', (req, res) => {
	const username = req.body.username
	const password = req.body.password

	res.json({
		username,
		password,
	})
})

app.listen(PORT, () => {
	console.log(`Server started at port ${PORT}.`)
})
