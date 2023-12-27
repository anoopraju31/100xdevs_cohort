import PropTypes from 'prop-types'
const FormField = (props) => {
	const { id, label, placeholder, value, handleChange, type } = props
	return (
		<div>
			<label className='sr-only' htmlFor={id}>
				{label}
			</label>
			<input
				id={id}
				value={value}
				className='flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-grow w-full'
				placeholder={placeholder}
				type={type}
				onChange={handleChange}
			/>
		</div>
	)
}

FormField.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	type: PropTypes.string.isRequired,
}

export default FormField
