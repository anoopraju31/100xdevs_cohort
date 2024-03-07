import { Hono } from 'hono'

const app = new Hono()

app.post('/api/v1/signup', (c) => {
	return c.text('sign up route')
})

app.post('/api/v1/signin', (c) => {
	return c.text('sign in route')
})

app.post('/api/v1/blog', (c) => {
	return c.text('create blog route')
})

app.put('/api/v1/blog', (c) => {
	return c.text('edit blog')
})

app.get('/api/v1/blog/:id', (c) => {
	const id = c.req.param('id')

	console.log(id)

	return c.text('get blog by id route')
})

app.get('/api/v1/blog/bulk', (c) => {
	return c.text('get all blogs')
})

export default app
