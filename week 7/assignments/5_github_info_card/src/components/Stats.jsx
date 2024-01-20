import PropTypes from 'prop-types'

const Stats = (props) => {
	const { stat, title } = props

	return (
		<div className='w-full p-5 rounded-xl bg-orange-100 flex flex-col justify-center items-center gap-2 '>
			<p className='text-2xl font-extrabold font-sans text-orange-900'>
				{stat}
			</p>
			<p className='text-orange-700 font-medium capitalize whitespace-nowrap'>
				{title}
			</p>
		</div>
	)
}

Stats.propTypes = {
	stat: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	title: PropTypes.string.isRequired,
}

export default Stats
