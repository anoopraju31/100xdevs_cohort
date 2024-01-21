import { useRecoilValue } from 'recoil'
import PropTypes from 'prop-types'
import { todoAtom } from '../store/atom'

const Todo = ({ id }) => {
	const { title, description } = useRecoilValue(todoAtom)
	console.log(id)
	return (
		<div className='p-5 flex flex-col justify-center items-center gap-3 bg-orange-100 rounded-xl'>
			<h5 className='font-semibold text-xl'> {title} </h5>
			<p> {description} </p>
		</div>
	)
}

Todo.propTypes = {
	id: PropTypes.string,
}

export default Todo
