const jwt = require('jsonwebtoken')
require('dotenv').config()

// Middleware for handling auth
function adminMiddleware(req, res, next) {
	try {
		const authorization = req.headers?.authorization
		const secret = process.env.JWT_SECRET
		const token = authorization.split(' ')[1]

		const decoded = jwt.verify(token, secret)

		req.headers['admin-id'] = decoded.id

		next()
	} catch (error) {
		console.error(error)

		res.status(403).json({ message: 'unauthorized access' })
	}
}

module.exports = adminMiddleware
