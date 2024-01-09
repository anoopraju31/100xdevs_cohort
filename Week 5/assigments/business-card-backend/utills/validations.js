const zod = require('zod')

const cardSchema = zod.object({
	name: zod.string().min(1),
	description: zod.string().min(1),
	interests: zod.string().array(),
	socials: zod.string().array(),
})

module.exports = cardSchema
