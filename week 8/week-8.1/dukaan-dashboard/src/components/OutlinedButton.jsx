import PropTypes from 'prop-types'

const OutlinedButton = ({ children, handleClick }) => {
	return (
		<button
			type='button'
			onClick={handleClick}
			className='py-[6px] px-3 flex items-center gap-[6px] rounded border border-black-85 bg-black-100'>
			{children}
		</button>
	)
}

OutlinedButton.propTypes = {
	children: PropTypes.node,
	handleClick: PropTypes.func,
}

export default OutlinedButton
