import { useEffect, useState } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import useIsOnline from './hooks/useIsOnline'
import useMousePosistion from './hooks/useMousePosistion'
import useDimension from './hooks/useDimension'

function useTodos() {
	const [todos, setTodos] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const getTodos = async () => {
			const response = await axios.get('https://sum-server.100xdevs.com/todos')

			setTodos(response.data.todos)
			setLoading(false)
		}

		const interval = setInterval(getTodos, 1000)

		return () => {
			clearInterval(interval)
		}
	}, [])

	return { todos, loading }
}

const App = () => {
	const { todos, loading } = useTodos()
	const isOnline = useIsOnline()
	const { x, y } = useMousePosistion()
	const { width, height } = useDimension()

	if (loading)
		return (
			<div className='max-w-sm mx-auto py-10 flex flex-col gap-4'>
				<p> Loading... </p>
			</div>
		)

	return (
		<div className='max-w-sm mx-auto py-10 flex flex-col gap-4'>
			<p className='text-xl text-center '>{isOnline ? 'Online' : 'Offline'}</p>
			{todos.map((todo) => (
				<Todo key={todo.id} todo={todo} />
			))}
			<p className='text-xl text-center '>
				mouse position: x: {x}, y: {y}
			</p>
			<p className='text-xl text-center '>
				Dimension: width: {width}, height: {height}
			</p>
		</div>
	)
}

const Todo = ({ todo }) => {
	const { id, title, description } = todo

	return (
		<div className='p-4 flex flex-col gap-2 rounded-xl bg-fuchsia-100'>
			<h4>
				{id} - {title}
			</h4>
			<p> {description} </p>
		</div>
	)
}

Todo.propTypes = {
	todo: PropTypes.object,
}

export default App
