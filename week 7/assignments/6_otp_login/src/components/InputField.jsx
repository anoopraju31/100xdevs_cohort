import PropTypes from 'prop-types'

const InputField = (props) => {
	const { label, id, name, type, placeholder, value, handleChange } = props

	return (
		<>
			<label htmlFor={id} className='sr-only'>
				{label}
			</label>
			<input
				id={id}
				name={name}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
				className='bg-transparent border outline-none border-orange-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 placeholder:text-orange-800/80 transition-colors duration-300'
			/>
		</>
	)
}

InputField.propTypes = {
	label: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['text', 'email', 'number', 'url']).isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	handleChange: PropTypes.func.isRequired,
}

InputField.defaultProp = {
	type: 'text',
}

export default InputField
