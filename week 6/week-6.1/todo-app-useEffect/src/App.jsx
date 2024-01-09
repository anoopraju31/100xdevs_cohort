import { useEffect } from 'react'
import { useState } from 'react'
import PropType from 'prop-types'

const App = () => {
	const [todos, setTodos] = useState([])

	useEffect(() => {
		fetch('https://sum-server.100xdevs.com/todos').then(async (res) => {
			const data = await res.json()
			setTodos(data.todos)
		})
	}, [])

	return (
		<div>
			{todos.map(({ id, title, description }) => (
				<Todo key={id} title={title} description={description} />
			))}
		</div>
	)
}

const Todo = (props) => {
	const { title, description } = props
	return (
		<div>
			<h2> {title} </h2>
			<p> {description} </p>
		</div>
	)
}

Todo.propTypes = {
	title: PropType.string,
	description: PropType.string,
}

export default App
