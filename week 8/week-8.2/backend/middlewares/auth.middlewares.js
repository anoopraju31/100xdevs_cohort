const jwt = require('jsonwebtoken')
require('dotenv').config()

const authMiddleware = (req, res, next) => {
	const authHeader = req.headers.authorization

	if (!authHeader || !authHeader.startsWith('Bearer '))
		return res.status(403).json({ message: 'token not found' })

	const token = authHeader.split(' ')[1]

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET)
		req.userId = decoded.userId

		next()
	} catch (err) {
		return res.status(403).json({ message: 'something went wrong' })
	}
}

module.exports = {
	authMiddleware,
}
