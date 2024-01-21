import { useRecoilValue } from 'recoil'
import PropTypes from 'prop-types'
import { todoAtom } from '../store/atom'

const Todo = ({ id }) => {
	const { title, description } = useRecoilValue(todoAtom)
	console.log(id)
	return (
		<div>
			<h5> {title} </h5>
			<p> {description} </p>
		</div>
	)
}

Todo.propTypes = {
	id: PropTypes.string,
}

export default Todo
