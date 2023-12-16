const zod = require('zod')

function validateInput(arr) {
	const schema = zod.array(zod.number())

	const response = schema.safeParse(arr)

	console.log(response)
}

validateInput([1, 2, 3, 4, 5])
validateInput(5)
validateInput('hello')
validateInput([1, 'h', 3, 4, 5])

function validateEmail(email) {
	const schema = zod.string().email()

	const res = schema.safeParse(email)

	console.log(res)
}

validateEmail('anoop@gmail.com')
validateEmail('anoop@gmail')
validateEmail('anoop.com')

function validateCredentials(email, password) {
	const schema = zod.object({
		email: zod.string().email(),
		password: zod.string().min(8),
	})

	const res = schema.safeParse({ email, password })

	console.log(res)
}

validateCredentials('anoop@gmail.com', 'fewngfouwh')
validateCredentials('anoop@gmail.com', 'few')
validateCredentials('anoop@gmail.com', 294364)
validateCredentials('anoop@', 'fewngfouwh')
validateCredentials('anoop@.com', 'fewngf')
