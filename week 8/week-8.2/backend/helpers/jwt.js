const jwt = require('jsonwebtoken')
require('dotenv').config()

const JWT_SECRET = process.env.JWT_SECRET

const generateToken = (userId) => {
	const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: '30d' })
	return token
}

module.exports = { generateToken }
