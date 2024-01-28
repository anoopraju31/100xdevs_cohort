import PropTypes from 'prop-types'

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

export default Todo
