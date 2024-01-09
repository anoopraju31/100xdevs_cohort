import PropTypes from 'prop-types'

const BusinessCard = (props) => {
	const { name, description, interests, socials } = props
	return (
		<div className='max-w-lg p-10 bg-fuchsia-200 font-mono flex gap-2 justify-center items-center flex-col'>
			<h2 className='text-4xl mb-4'> {name} </h2>
			<p className='text-center mb-2'> {description} </p>
			<div className='flex gap-2 mb-2'>
				<h4 className='font-medium'> Interests: </h4>
				<div className='flex items-center gap-2'>
					{interests.map(({ id, interest }) => (
						<p key={id}> {interest} </p>
					))}
				</div>
			</div>

			<div className='flex items-center gap-4'>
				{socials.map(({ id, title, link }) => (
					<a key={id} href={link}>
						{' '}
						{title}{' '}
					</a>
				))}
			</div>
		</div>
	)
}

const Interest = {
	id: PropTypes.string,
	interest: PropTypes.string,
}

const Social = {
	id: PropTypes.string,
	title: PropTypes.string,
	link: PropTypes.string,
}

BusinessCard.propTypes = {
	name: PropTypes.string,
	description: PropTypes.string,
	interests: PropTypes.arrayOf(Interest),
	socials: PropTypes.arrayOf(Social),
}

export default BusinessCard
