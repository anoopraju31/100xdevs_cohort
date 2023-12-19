const jwt = require('jsonwebtoken')
const zod = require('zod')
const jwtPassword = 'secret'

function signJwt(username, password) {
	const usernameSchema = zod.string().min(1).email()
	const passwordSchema = zod.string().min(6)

	const isValidUsername = usernameSchema.safeParse(username)
	const isValidPassword = passwordSchema.safeParse(password)

	if (!isValidUsername.success || !isValidPassword.success) return null

	const encode = jwt.sign({ username }, jwtPassword)

	return encode
}

function verifyJwt(token) {
	try {
		jwt.verify(token, jwtPassword)

		return true
	} catch (error) {
		return false
	}
}

function decodeJwt(token) {
	const decoded = jwt.decode(token)

	return decoded !== null
}

module.exports = {
	signJwt,
	verifyJwt,
	decodeJwt,
	jwtPassword,
}
