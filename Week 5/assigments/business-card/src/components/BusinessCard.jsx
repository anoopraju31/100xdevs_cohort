import PropTypes from 'prop-types'

const BusinessCard = (props) => {
	const { name, description, interests, socials } = props
	return (
		<div>
			<h2> {name} </h2>
			<p> {description} </p>
			<div>
				<h4> Interests </h4>
				{interests.map(({ id, interest }) => (
					<p key={id}> {interest} </p>
				))}
			</div>

			<div className=''>
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
