const { Admin } = require('../db')

async function adminExists(username) {
	const existingUser = await Admin.findOne({ username })

	return existingUser
}

module.exports = {
	adminExists,
}
