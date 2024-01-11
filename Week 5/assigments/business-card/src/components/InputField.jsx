import PropTypes from 'prop-types'
import { memo } from 'react'

const InputField = memo((props) => {
	const {
		isTextarea,
		id,
		name,
		label,
		placeholder,
		type,
		rows,
		value,
		handleChange,
		isDisabled,
	} = props
	return (
		<div className='mb-4'>
			<label htmlFor={id} className='sr-only'>
				{label}
			</label>
			{isTextarea ? (
				<textarea
					rows={rows}
					name={name}
					id={id}
					placeholder={placeholder}
					onChange={handleChange}
					value={value}
					disabled={isDisabled}
					className='bg-transparent border outline-none border-orange-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 placeholder:text-orange-800/80 transition-colors duration-300'
				/>
			) : (
				<input
					type={type}
					name={name}
					id={id}
					placeholder={placeholder}
					onChange={handleChange}
					value={value}
					disabled={isDisabled}
					className='bg-transparent border outline-none border-orange-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 placeholder:text-orange-800/80 transition-colors duration-300'
				/>
			)}
		</div>
	)
})

InputField.displayName = 'InputField'

InputField.propTypes = {
	isTextarea: PropTypes.bool,
	name: PropTypes.string,
	label: PropTypes.string,
	id: PropTypes.string,
	placeholder: PropTypes.string,
	type: PropTypes.string,
	rows: PropTypes.number,
	handleChange: PropTypes.func,
	value: PropTypes.string,
	isDisabled: PropTypes.bool,
}

export default InputField
