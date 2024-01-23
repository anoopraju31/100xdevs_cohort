import PropTypes from 'prop-types'

const TabButton = (props) => {
	const { title, quantity, isActive, handleClick } = props
	return (
		<button
			type='button'
			onClick={handleClick}
			className={`py-[6px] px-4 rounded-full flex items-center gap-[10px] font-inter text-sm font-medium hover:opacity-80 ${
				isActive
					? 'bg-primary-blue text-black-100'
					: 'bg-black-90 text-black-50'
			}`}>
			{title} ({quantity})
		</button>
	)
}

TabButton.propTypes = {
	title: PropTypes.string,
	quantity: PropTypes.number,
	isActive: PropTypes.bool,
	handleClick: PropTypes.func,
}

export default TabButton
