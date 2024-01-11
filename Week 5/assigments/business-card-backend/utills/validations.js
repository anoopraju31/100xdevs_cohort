const zod = require('zod')

const cardSchema = zod.object({
	name: zod.string().min(1),
	description: zod.string().min(1),
	interests: zod.string().array(),
	socials: zod.string().array(),
})

const nameSchema = zod.string().min(1, { message: 'Name is required.' })
const emailSchema = zod
	.string()
	.min(1, { message: 'Email is required.' })
	.email('Invalid email.')
const passwordSchema = zod
	.string()
	.min(8, { message: 'Password must contain atleast 8 characters.' })

const signUpSchema = zod.object({
	name: nameSchema,
	email: emailSchema,
	password: passwordSchema,
})

const signInSchema = zod.object({
	email: emailSchema,
	password: passwordSchema,
})

module.exports = { cardSchema, signInSchema, signUpSchema }
