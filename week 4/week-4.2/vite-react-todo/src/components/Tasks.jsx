import PropTypes from 'prop-types'
import Task from './Task'

const Tasks = (props) => {
	const { tasks } = props
	return (
		<section className='grid gap-6 mt-4'>
			{tasks.map((task) => (
				<Task key={task.id} {...task} />
			))}
		</section>
	)
}

Tasks.propTypes = {
	tasks: PropTypes.array.isRequired,
}

export default Tasks
