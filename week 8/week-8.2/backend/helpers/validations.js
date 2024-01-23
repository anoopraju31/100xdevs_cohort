const zod = require('zod')

const emailSchema = zod
	.string()
	.min(1, { message: 'Email is required.' })
	.email('Invalid email.')

const firstNameSchame = zod
	.string()
	.min(1, { message: 'First name is required.' })

const lastNameSchame = zod
	.string()
	.min(1, { message: 'Last name is required.' })

const passwordSchema = zod
	.string()
	.min(8, { message: 'Password must contain atleast 8 characters.' })

const signUpSchema = zod.object({
	username: emailSchema,
	firstName: firstNameSchame,
	lastName: lastNameSchame,
	password: passwordSchema,
})

const signInSchema = zod.object({
	username: emailSchema,
	password: passwordSchema,
})

const updateSchema = zod.object({
	firstName: firstNameSchame.optional(),
	lastName: lastNameSchame.optional(),
	password: passwordSchema.optional(),
})

const transferSchema = zod.object({
	amount: zod.number().positive().min(0),
	to: zod.string(),
})

module.exports = {
	signUpSchema,
	signInSchema,
	updateSchema,
	transferSchema,
}
