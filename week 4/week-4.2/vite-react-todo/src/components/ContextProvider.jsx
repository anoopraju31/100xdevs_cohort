import { createContext, useState } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

export const AppContext = createContext()
const ContextProvider = (props) => {
	const { children } = props
	const [tasks, setTasks] = useState([])
	const [task, setTask] = useState({
		title: '',
		description: '',
		completed: false,
		id: '',
	})

	const handleTitleChange = (e) =>
		setTask((prev) => ({ ...prev, title: e.target.value }))
	const handleDescriptionChange = (e) =>
		setTask((prev) => ({ ...prev, description: e.target.value }))
	const addTaskId = () => setTask((prev) => ({ ...prev, id: uuidv4() }))
	const clearTask = () =>
		setTask({
			title: '',
			description: '',
			completed: false,
			id: '',
		})
	const handleTasks = (task) => setTasks((prev) => [...prev, task])
	const deleteTask = (id) => {
		setTasks((prev) => prev.filter((task) => task.id !== id))
	}
	const toggleCompletion = (id) => {
		const alterTasks = tasks.map((task) => {
			if (task.id === id) {
				task.completed = !task.completed
			}

			return task
		})
		setTasks(alterTasks)
	}

	const data = {
		tasks,
		handleTasks,
		deleteTask,
		toggleCompletion,
		task,
		handleTitleChange,
		handleDescriptionChange,
		addTaskId,
		clearTask,
	}
	return <AppContext.Provider value={data}>{children}</AppContext.Provider>
}

ContextProvider.propTypes = {
	children: PropTypes.object,
}

export default ContextProvider
