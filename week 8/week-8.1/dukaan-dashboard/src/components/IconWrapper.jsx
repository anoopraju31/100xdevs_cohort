import PropTypes from 'prop-types'

const IconWrapper = ({ icon, altText }) => {
	return (
		<div className='w-8 sm:w-10 h-8 sm:h-10 p-2 bg-black-90 flex justify-center items-center rounded-full'>
			<img src={icon} alt={altText} className='object-contain flex-shrink-0' />
		</div>
	)
}

IconWrapper.propTypes = {
	icon: PropTypes.string,
	altText: PropTypes.string,
}

export default IconWrapper
