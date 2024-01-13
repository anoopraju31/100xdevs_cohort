import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

const App = () => {
	const [todos, setTodos] = useState([])

	useEffect(() => {
		axios
			.get('https://sum-server.100xdevs.com/todos')
			.then((res) => setTodos(res.data.todos))
	}, [])

	return (
		<>
			{todos.map(({ id, title, description }) => (
				<Todo key={id} title={title} description={description} />
			))}
		</>
	)
}

const Todo = ({ title, description }) => {
	return (
		<div>
			<h3> {title} </h3>
			<p> {description} </p>
		</div>
	)
}

Todo.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
}

export default App
