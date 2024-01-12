import PropTypes from 'prop-types'

const Button = (props) => {
	const { title, type, isDisabled, handleClick, style } = props
	return (
		<button
			type={type}
			disabled={isDisabled}
			onClick={handleClick}
			className={`w-full text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 disabled:bg-orange-200 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none transition-colors duration-300 ${style}`}>
			{title}
		</button>
	)
}

Button.propTypes = {
	title: PropTypes.string,
	type: PropTypes.string,
	isDisabled: PropTypes.bool,
	handleClick: PropTypes.func,
	style: PropTypes.string,
}

export default Button
