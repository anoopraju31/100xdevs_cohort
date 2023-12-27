import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const AppContext = createContext()
const ContextProvider = (props) => {
	const { children } = props
	const [tasks, setTasks] = useState([])

	const data = {
		tasks,
		setTasks,
	}
	return <AppContext.Provider value={data}>{children}</AppContext.Provider>
}

ContextProvider.propTypes = {
	children: PropTypes.object,
}

export default ContextProvider
