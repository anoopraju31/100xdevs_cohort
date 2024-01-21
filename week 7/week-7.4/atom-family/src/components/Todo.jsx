import { useRecoilValue } from 'recoil'
import PropTypes from 'prop-types'
import { todoAtom } from '../store/atom'

const Todo = ({ id }) => {
	const { title, description } = useRecoilValue(todoAtom)
	console.log(id)
	return (
		<div className='w-full max-w-sm p-5 flex flex-col justify-center items-center gap-3 bg-orange-100 rounded-xl font-mono'>
			<h5 className='font-semibold text-xl text-orange-800'> {title} </h5>
			<p className='text-orange-700'> {description} </p>
		</div>
	)
}

Todo.propTypes = {
	id: PropTypes.string,
}

export default Todo
