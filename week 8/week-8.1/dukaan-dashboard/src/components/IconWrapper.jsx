import PropTypes from 'prop-types'

const IconWrapper = ({ icon, altText }) => {
	return (
		<div className='w-10 h-10 bg-black-90 flex justify-center items-center rounded-full'>
			<img src={icon} alt={altText} className='object-contain' />
		</div>
	)
}

IconWrapper.propTypes = {
	icon: PropTypes.string,
	altText: PropTypes.string,
}

export default IconWrapper
