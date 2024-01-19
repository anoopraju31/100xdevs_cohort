import PropTypes from 'prop-types'

const Stats = (props) => {
	const { stat, title } = props
	return (
		<div className='flex flex-col items-center gap-2 '>
			<p className='text-2xl font-bold text-gray-800'> {stat} </p>
			<p className='text-gray-600 capitalize'> {title} </p>
		</div>
	)
}

Stats.propTypes = {
	stat: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
}

export default Stats
