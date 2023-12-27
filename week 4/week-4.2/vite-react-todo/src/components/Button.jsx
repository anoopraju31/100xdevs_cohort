import PropTypes from 'prop-types'

const Button = (props) => {
	const { type, title, handleClick, styles } = props
	return (
		<button
			type={type}
			onClick={handleClick}
			className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-500 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-2 ${styles}`}>
			{title}
		</button>
	)
}

Button.propTypes = {
	type: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	handleClick: PropTypes.func.isRequired,
	styles: PropTypes.string,
}

export default Button
