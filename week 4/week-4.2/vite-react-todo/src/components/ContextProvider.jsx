import { createContext, useState } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

export const AppContext = createContext()
const ContextProvider = (props) => {
	const { children } = props
	const [tasks, setTasks] = useState([])
	const [isEditForm, setIsEditForm] = useState(false)
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

	const clearTask = () =>
		setTask({
			title: '',
			description: '',
			completed: false,
			id: '',
		})

	const handleTasks = (task) =>
		setTasks((prev) => [...prev, { ...task, id: uuidv4() }])

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

	const editTask = (id) => {
		const filteredTasks = tasks.filter((task) => task.id === id)

		if (!filteredTasks) return

		setTask(filteredTasks[0])
		setIsEditForm(true)
	}

	const handleEditTask = (editedTask) => {
		const alteredTasks = tasks.map((task) =>
			task.id === editedTask.id ? editedTask : task,
		)

		setTasks(alteredTasks)
	}

	const data = {
		tasks,
		handleTasks,
		deleteTask,
		toggleCompletion,
		task,
		handleTitleChange,
		handleDescriptionChange,
		clearTask,
		editTask,
		isEditForm,
		handleEditTask,
	}
	return <AppContext.Provider value={data}>{children}</AppContext.Provider>
}

ContextProvider.propTypes = {
	children: PropTypes.object,
}

export default ContextProvider
