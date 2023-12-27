import PropTypes from 'prop-types'
import Button from './Button'

const Task = (props) => {
	const { id, title, description, completed } = props

	return (
		<div
			className={`rounded-lg border bg-card text-card-foreground shadow-sm ${
				completed && 'opacity-35 hover:opacity-100'
			}`}>
			<div className='flex flex-col space-y-1.5 p-6'>
				<h3
					className={`text-2xl font-semibold leading-none tracking-tight ${
						completed && 'line-through'
					}`}>
					{title} {id}
				</h3>
			</div>

			<p className={`p-6 text-sm ${completed && 'line-through'}`}>
				{description}
			</p>

			<div className='items-center p-6 flex gap-4 justify-end'>
				<Button title='Mark as done' styles='bg-green-500' />
				<Button title='Edit' styles='bg-gray-300' />
				<Button title='Delete' styles='bg-red-500' />
			</div>
		</div>
	)
}

Task.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired,
}

export default Task
