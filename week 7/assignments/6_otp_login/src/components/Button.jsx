import PropTypes from 'prop-types'

const Button = (props) => {
	const { title, type, handleClick, style } = props

	return (
		<button
			type={type}
			onClick={handleClick}
			className={`w-full text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 disabled:bg-orange-200 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none transition-colors duration-300 ${style}`}>
			{title}
		</button>
	)
}

Button.propTypes = {
	title: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['button', 'submit', 'reset']),
	handleClick: PropTypes.func,
	style: PropTypes.string,
}

Button.defaultProps = {
	type: 'button',
}

export default Button
