import PropTypes from 'prop-types'

const Card = (props) => {
	const {
		title,
		description,
		link,
		linkText,
		isButton,
		image,
		altText,
		isSmall,
	} = props

	return (
		<div
			className={`${isSmall ? 'max-w-sm' : 'w-full'} rounded-lg shadow bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700`}>
			{image ? (
				<div className='w-full aspect-video'>
					<img
						className='w-full h-full rounded-t-lg'
						src={image}
						alt={altText}
					/>
				</div>
			) : null}
			<div className='p-6'>
				<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
					{title}
				</h5>
				<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
					{description}
				</p>
				{link ? (
					isButton ? (
						<a
							href={link}
							className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
							{linkText}
							<svg
								className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 14 10'>
								<path
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M1 5h12m0 0L9 1m4 4L9 9'
								/>
							</svg>
						</a>
					) : (
						<a
							href={link}
							className='inline-flex items-center text-blue-600 hover:underline'>
							{linkText}
							<svg
								className='w-3 h-3 ms-2.5 rtl:rotate-[270deg]'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 18 18'>
								<path
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778'
								/>
							</svg>
						</a>
					)
				) : null}
			</div>
		</div>
	)
}

Card.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	link: PropTypes.string,
	linkText: PropTypes.string,
	isButton: PropTypes.bool,
	image: PropTypes.string,
	altText: PropTypes.string,
	isSmall: PropTypes.bool,
}

export default Card
