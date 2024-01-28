import { useEffect, useState } from 'react'
import axios from 'axios'

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

export default useTodos
