import PropTypes from 'prop-types'

const Avatar = ({ title }) => {
	return (
		<div className='w-10 h-10 rounded-full bg-orange-200 group-hover:bg-orange-100 p-3 flex justify-center items-center uppercase font-mono text-orange-800 group-hover:text-orange-700 font-bold'>
			{title}
		</div>
	)
}

Avatar.propTypes = {
	title: PropTypes.string,
}

export default Avatar
