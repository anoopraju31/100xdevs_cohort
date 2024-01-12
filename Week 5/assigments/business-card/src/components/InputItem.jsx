import PropTypes from 'prop-types'
import { IoIosClose } from 'react-icons/io'

const InputItem = (props) => {
	const { title, link, handleClick } = props

	return (
		<div className='relative group'>
			<p className='border rounded border-orange-300 group-hover:border-transparent overflow-hidden'>
				{link ? (
					<a href={link} className='w-full h-full bg-orange-300 px-2 py-1'>
						{title}
					</a>
				) : (
					<span className='px-2'> interest </span>
				)}
			</p>

			<button
				onClick={handleClick}
				className='absolute top-0 left-0 w-full h-full rounded hidden group-hover:flex justify-center items-center text-lg group-hover:backdrop-blur-sm group-hover:bg-orange-300/60'>
				<IoIosClose />
			</button>
		</div>
	)
}

InputItem.propTypes = {
	title: PropTypes.string,
	link: PropTypes.string,
	handleClick: PropTypes.func,
}

export default InputItem
