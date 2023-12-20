const { Admin, User } = require('../db')

async function adminExists(username) {
	const existingUser = await Admin.findOne({ username })

	return existingUser
}

async function userExists(username) {
	const existingUser = await User.findOne({ username })

	return existingUser
}

module.exports = {
	adminExists,
	userExists,
}
