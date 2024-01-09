import PropTypes from 'prop-types'

const Link = (props) => {
	const { title, link } = props
	return (
		<a
			className='px-4 py-2 rounded-md flex justify-center items-center bg-orange-300 hover:bg-orange-400/70 '
			href={link}
			target='_blank'
			rel='noreferrer'>
			{' '}
			{title}{' '}
		</a>
	)
}

Link.propTypes = {
	title: PropTypes.string,
	link: PropTypes.string,
}

export default Link
