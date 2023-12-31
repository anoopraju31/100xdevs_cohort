import { useEffect, useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

const App = () => {
	const [todos, setTodos] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch('http://localhost:5500/todo')
			const data = await res.json()

			setTodos(data)
		}

		fetchData()
	}, [])

	return (
		<div>
			<CreateTodo />
			<Todos todos={todos} />
		</div>
	)
}

export default App
