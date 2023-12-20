const { userExists } = require('../utills')

async function userMiddleware(req, res, next) {
	const username = req.headers.username
	const password = req.headers.password

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

	req.headers['user-id'] = user._id
	next()
}

module.exports = userMiddleware
