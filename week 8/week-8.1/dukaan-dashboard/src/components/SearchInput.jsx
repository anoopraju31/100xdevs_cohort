import PropTypes from 'prop-types'

const SearchInput = (props) => {
	const { variant, label, id, name, placeholder } = props
	const style = {
		outlined: 'bg-black-100 border border-black-85',
		primary: 'bg-black-95',
	}

	return (
		<>
			<label htmlFor='search' className='sr-only'>
				{label}
			</label>
			<div
				className={`py-[10px] px-4 flex items-center gap-2 rounded ${style[variant]}`}>
				<img src='/search.svg' alt='search icon' />
				<input
					type='text'
					id={id}
					name={name}
					placeholder={placeholder}
					className='text-black-50 text-[15px] leading--[22px] flex-shrink-0 flex-1 bg-transparent outline-none border-none'
				/>
			</div>
		</>
	)
}

SearchInput.propTypes = {
	variant: PropTypes.string,
	label: PropTypes.string,
	id: PropTypes.string,
	name: PropTypes.string,
	placeholder: PropTypes.string,
}

SearchInput.defaultProps = {
	variant: 'primary',
}

export default SearchInput
