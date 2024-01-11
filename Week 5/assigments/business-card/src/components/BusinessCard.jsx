import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import Link from './Link'
import Button from './Button'

const BusinessCard = (props) => {
	const { name, description, interests, socials } = props
	const navigate = useNavigate()

	const handleEdit = () => {
		navigate('/edit-card')
	}
	const handleDelete = () => {
		console.log('delete item')
	}

	return (
		<div className='relative group'>
			<div className='max-w-lg p-10 bg-orange-200 text-orange-900 rounded-lg shadow-lg font-mono flex gap-2 justify-center items-center flex-col'>
				<h2 className='text-4xl mb-2 leading-none'> {name} </h2>
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
						<Link key={id} href={link} title={title} />
					))}
				</div>
			</div>

			<div className='absolute top-0 left-0 z-10 px-10 w-full h-full rounded-lg hidden group-hover:flex flex-col gap-5 justify-center items-center backdrop-blur-[6px] transition-colors duration-1000'>
				<Button title='Delete' type='button' handleClick={handleDelete} />
				<Button title='Edit' type='button' handleClick={handleEdit} />
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
