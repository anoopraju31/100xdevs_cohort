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
		<main className='bg-orange-100'>
			<div className='max-w-xl  relative min-h-screen mx-auto flex flex-col gap-5'>
				<GetTodoById />
				<div className='flex flex-col gap-5'>
					{todos.map(({ id, title, description }) => (
						<Todo key={id} title={title} description={description} />
					))}
				</div>
			</div>
		</main>
	)
}

const Todo = ({ title, description }) => {
	return (
		<div className='p-5 mb-5 bg-orange-50 rounded-xl'>
			<h3> Title: {title} </h3>
			<p> Description: {description} </p>
		</div>
	)
}

Todo.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
}

const GetTodoById = () => {
	const [todoId, setTodoId] = useState('')
	const [todo, setTodo] = useState(null)

	useEffect(() => {
		axios
			.get(`https://sum-server.100xdevs.com/todo?id=${todoId}`)
			.then((res) => setTodo(res.data.todo))
	}, [todoId])

	return (
		<div className='p-10 sticky top-0 rounded-xl flex flex-col gap-5 bg-orange-200'>
			<input
				className='bg-transparent border outline-none border-orange-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 placeholder:text-orange-800/80 transition-colors duration-300'
				type='text'
				value={todoId}
				onChange={(e) => setTodoId(e.target.value)}
			/>

			<Todo title={todo?.title} description={todo?.description} />
		</div>
	)
}

export default App
