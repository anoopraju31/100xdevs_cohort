const bcrypt = require('bcrypt')
require('dotenv').config()

const generateHashedPassword = async (password) => {
	const saltRounds = parseInt(process.env.SALT)
	const salt = await bcrypt.genSalt(saltRounds)
	const hashedPassword = await bcrypt.hash(password, salt)

	return hashedPassword
}
const comparePasswords = async (password, hashedPassword) => {
	const isValidPassword = await bcrypt.compare(password, hashedPassword)
	return isValidPassword
}

module.exports = {
	generateHashedPassword,
	comparePasswords,
}
