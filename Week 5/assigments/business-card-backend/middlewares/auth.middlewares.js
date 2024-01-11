const jwt = require('jsonwebtoken')
require('dotenv').config()

const secret = process.env.JWT_SECRET

const authMiddleware = (req, res, next) => {
	try {
		const authorization = req.headers?.authorization
		const token = authorization?.split(' ')[1]
		const decodedToken = jwt.verify(token, secret)

		if (!decodedToken)
			return res.status(403).json({ message: 'unauthorized access' })

		req.headers['user-id'] = decodedToken?.id

		next()
	} catch (error) {}
}

module.exports = authMiddleware
