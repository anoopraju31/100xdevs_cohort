import PropTypes from 'prop-types'

const Button = (props) => {
	const { variant, disabled, size, pills, type, title } = props

	const variants = {
		primary:
			'text-white bg-blue-700 hover:bg-blue-800 disabled:hover:bg-blue-700 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 disabled:dark:hover:bg-blue-600 dark:focus:ring-blue-800',
		secondary:
			'text-white bg-purple-700 hover:bg-purple-800 disabled:hover:bg-purple-700 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 disabled:dark:hover:bg-purple-600 dark:focus:ring-purple-900',
		danger:
			'text-white bg-red-700 hover:bg-red-800 disabled:hover:bg-red-700 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 disabled:dark:hover:bg-red-600 dark:focus:ring-red-900',
		success:
			'text-white bg-green-700 hover:bg-green-800 disabled:hover:bg-green-700 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 disabled:dark:hover:bg-green-600 dark:focus:ring-green-800',
	}

	const sizes = {
		xs: 'px-3 py-2 text-xs',
		sm: 'px-3 py-2 text-sm',
		bs: 'px-5 py-2.5 text-sm',
		lg: 'px-5 py-3 text-base',
		xl: 'px-6 py-3.5 text-base',
	}

	return (
		<button
			className={`${variants[variant]} ${sizes[size]} focus:ring-4 font-medium ${pills ? 'rounded-full' : 'rounded-lg'} focus:outline-none disabled:cursor-not-allowed`}
			type={type}
			disabled={disabled}>
			{title}
		</button>
	)
}

Button.propTypes = {
	variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'success']),
	disabled: PropTypes.bool,
	size: PropTypes.oneOf(['xs', 'sm', 'bs', 'lg', 'xl']),
	pills: PropTypes.bool,
	type: PropTypes.oneOf(['button', 'submit', 'reset']),
	title: PropTypes.string.isRequired,
}

Button.defaultProps = {
	variant: 'primary',
	disabled: false,
	size: 'bs',
	pills: false,
	type: 'button',
}

export default Button
