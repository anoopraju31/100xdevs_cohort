import { memo } from 'react'
import PropTypes from 'prop-types'

const InputField = memo((props) => {
	const {
		id,
		name,
		label,
		placeholder,
		type,
		value,
		handleChange,
		isDisabled,
	} = props
	return (
		<>
			<label htmlFor={id} className='sr-only'>
				{label}
			</label>
			<input
				id={id}
				name={name}
				type={type}
				disabled={isDisabled}
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
				className='bg-transparent border outline-none border-orange-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 placeholder:text-orange-800/80 transition-colors duration-300'
			/>
		</>
	)
})

InputField.displayName = 'InputField'

InputField.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['text', 'email', 'number', 'password', 'url'])
		.isRequired,
	handleChange: PropTypes.func.isRequired,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	isDisabled: PropTypes.bool,
}

InputField.defaultProp = {
	type: 'text',
	isDisabled: false,
}

export default InputField
