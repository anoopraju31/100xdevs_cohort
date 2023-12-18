var jwt = require('jsonwebtoken')

const secret = 'rgonoigtj'
const payload = {
	username: 'Anoop Raju',
	email: 'anoopraju@gmail.com',
}

let token, decoded

// * Synchronous Sign with default (HMAC SHA256)
token = jwt.sign(payload, secret)
console.log('Synchronous Sign with default (HMAC SHA256): ', token)

// * Sign asynchronously
jwt.sign(payload, secret, (err, token) => {
	console.log('\nSign asynchronously: ', token)
})

// * Backdate a jwt 30 seconds
token = jwt.sign(
	{ ...payload, iat: Math.floor(Date.now() / 1000) - 30 },
	secret,
)
console.log('\nBackdate a jwt 30 seconds: ', token)

// * Signing a token with 1 hour of expiration
token = jwt.sign(payload, secret, { expiresIn: 60 * 60 }) // { expiresIn: '1h' }
console.log('\nSigning a token with 1 hour of expiration: ', token)

// * verify a token symmetric - synchronous
decoded = jwt.verify(token, secret)
console.log(decoded)

// * verify a token symmetric
jwt.verify(token, secret, function (err, decoded) {
	console.log(decoded)
})
