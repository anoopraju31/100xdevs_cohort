import PropTypes from 'prop-types'

const ChevronRight = ({ styles }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='25'
			height='24'
			viewBox='0 0 25 24'
			className={styles}
			fill='none'>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M8.62624 5.29289C9.01676 4.90237 9.64993 4.90237 10.0405 5.29289L16.0405 11.2929C16.228 11.4804 16.3333 11.7348 16.3333 12C16.3333 12.2652 16.228 12.5196 16.0405 12.7071L10.0405 18.7071C9.64993 19.0976 9.01676 19.0976 8.62624 18.7071C8.23571 18.3166 8.23571 17.6834 8.62624 17.2929L13.9191 12L8.62624 6.70711C8.23571 6.31658 8.23571 5.68342 8.62624 5.29289Z'
			/>
		</svg>
	)
}

ChevronRight.propTypes = {
	styles: PropTypes.string,
}

export default ChevronRight
