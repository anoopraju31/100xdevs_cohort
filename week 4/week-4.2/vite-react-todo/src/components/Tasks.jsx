import { useContext } from 'react'
import { AppContext } from './ContextProvider'
import Task from './Task'

const Tasks = () => {
	const { tasks } = useContext(AppContext)

	return (
		<section className='grid gap-6 mt-4'>
			{tasks.map((task) => (
				<Task key={task.id} {...task} />
			))}
		</section>
	)
}

export default Tasks
