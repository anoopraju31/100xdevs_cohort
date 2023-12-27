import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const AppContext = createContext()
const ContextProvider = (props) => {
	const { children } = props
	const [tasks, setTasks] = useState([])

	const handleTasks = (task) => setTasks((prev) => [...prev, task])
	const deleteTask = (id) => {
		setTasks((prev) => prev.filter((task) => task.id !== id))
	}

	const data = {
		tasks,
		handleTasks,
		deleteTask,
	}
	return <AppContext.Provider value={data}>{children}</AppContext.Provider>
}

ContextProvider.propTypes = {
	children: PropTypes.object,
}

export default ContextProvider
