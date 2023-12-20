const { adminExists } = require('../utills')

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
	const username = req.headers.username
	const password = req.headers.password

	const admin = await adminExists(username)

	if (!admin) {
		return res.status(400).json({
			message: 'admin does not exists',
		})
	}

	if (admin.password !== password) {
		console.log(password, admin.password, admin)
		return res.status(400).json({
			message: 'invalid password',
		})
	}

	req.headers['admin-id'] = admin._id

	return next()
}

module.exports = adminMiddleware
