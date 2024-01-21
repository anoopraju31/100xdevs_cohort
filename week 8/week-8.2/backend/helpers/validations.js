const zod = require('zod')

const signupSchema = zod.object({
	username: zod.string().email(),
	firstName: zod.string(),
	lastName: zod.string(),
	password: zod.string(),
})

const signInSchema = zod.object({
	username: zod.string().email(),
	password: zod.string(),
})

const updateSchema = zod.object({
	password: zod.string().optional(),
	firstName: zod.string().optional(),
	lastName: zod.string().optional(),
})

module.exports = {
	signupSchema,
	signInSchema,
	updateSchema,
}
