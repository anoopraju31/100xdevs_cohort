const express = require('express')
const jwt = require('jsonwebtoken')
const jwtPassword = '123456'

const app = express()
const PORT = 5500

const ALL_USERS = [
	{
		username: 'harkirat@gmail.com',
		password: '123',
		name: 'harkirat singh',
	},
	{
		username: 'raman@gmail.com',
		password: '123321',
		name: 'Raman singh',
	},
	{
		username: 'priya@gmail.com',
		password: '123321',
		name: 'Priya kumari',
	},
]

function userExists(username, password) {
	let isUserExists = false

	for (let i = -0; i < ALL_USERS.length; i++) {
		if (
			ALL_USERS[i].username === username &&
			ALL_USERS[i].password === password
		) {
			isUserExists = true
			break
		}
	}

	return isUserExists
}

app.use(express.json())

app.post('/signin', function (req, res) {
	const username = req.body.username
	const password = req.body.password

	if (!userExists(username, password)) {
		return res.status(403).json({
			msg: 'User doesnt exist in our in memory db',
		})
	}

	var token = jwt.sign({ username: username }, jwtPassword)
	return res.json({
		token,
	})
})

app.get('/users', function (req, res) {
	const token = req.headers.authorization
	try {
		const decoded = jwt.verify(token, jwtPassword)

		const username = decoded.username
		// return a list of users other than this username

		const filteredUsers = ALL_USERS.filter(
			(user) => user.username !== username,
		).map((user) => user.username)

		res.json({
			usernames: filteredUsers,
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
