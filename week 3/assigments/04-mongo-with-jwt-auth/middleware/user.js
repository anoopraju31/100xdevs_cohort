function userMiddleware(req, res, next) {
	try {
		const authorization = req.headers?.authorization
		const secret = process.env.JWT_SECRET
		const token = authorization.split(' ')[1]

		const decoded = jwt.verify(token, secret)

		req.headers['user-id'] = decoded.id

		next()
	} catch (error) {
		console.error(error)

		res.status(403).json({ message: 'unauthorized access' })
	}
}

module.exports = userMiddleware
