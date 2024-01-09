import { useState } from 'react'

const App = () => {
	const [todos, setTodos] = useState([
		{ id: 1, title: 'Go to GYM', description: 'Go to GYM today' },
		{ id: 2, title: 'Go to Market', description: 'Go to Market today' },
		{
			id: 3,
			title: 'Go to Hospital',
			description: 'Go to Hospital tomorrow.',
		},
	])

	const addTodo = () => {
		setTodos((prev) => [
			...prev,
			{ id: prev.length, title: 'new todo', description: 'a new todo added' },
		])
	}

	return (
		<div>
			<button onClick={addTodo}> Add Todo </button>

			{todos.map(({ id, title, description }) => (
				<div key={id} className=''>
					<h3> {title} </h3>
					<p> {description} </p>
				</div>
			))}
		</div>
	)
}

export default App
