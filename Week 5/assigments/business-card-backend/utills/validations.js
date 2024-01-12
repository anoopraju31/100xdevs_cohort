const zod = require('zod')

const InterestSchema = zod.object({
	id: zod.string().uuid(),
	title: zod.string().min(1),
})

const SocialSchema = zod.object({
	id: zod.string().uuid(),
	title: zod.string().min(1),
	link: zod.string().url(),
})

const cardSchema = zod.object({
	name: zod.string().min(1),
	description: zod.string().min(1),
	interests: zod.array(InterestSchema),
	socials: zod.array(SocialSchema),
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
