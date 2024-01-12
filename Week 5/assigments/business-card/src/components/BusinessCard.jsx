import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import Link from './Link'
import Button from './Button'
import { useContext } from 'react'
import AppContext from './context'

const BusinessCard = (props) => {
	const { name, description, interests, socials, _id } = props
	const { addCardToEdit, changeToEditForm } = useContext(AppContext)
	const navigate = useNavigate()

	const handleEdit = () => {
		changeToEditForm()
		addCardToEdit({ name, description, interests, socials, _id })
		navigate('/edit-card')
	}
	const handleDelete = () => {
		console.log('delete item')
	}

	return (
		<div className='relative group max-w-lg h-fit overflow-hidden rounded-lg shadow-lg '>
			<div className='p-10 bg-orange-200 text-orange-900 font-mono flex gap-2 justify-center items-center flex-col'>
				<h2 className='text-4xl mb-2 leading-none'> {name} </h2>
				<p className='text-center mb-2'> {description} </p>

				<div className='flex gap-2 mb-2'>
					<h4 className='font-medium'> Interests: </h4>
					<div className='flex items-center gap-2'>
						{interests.map(({ _id, title }) => (
							<p key={_id}> {title} </p>
						))}
					</div>
				</div>

				<div className='flex items-center gap-4'>
					{socials.map(({ _id, title, link }) => (
						<Link key={_id} href={link} title={title} />
					))}
				</div>
			</div>

			<div className='absolute top-0 left-0 z-10 px-10 w-full h-full opacity-0 group-hover:opacity-100 flex flex-col gap-5 justify-center items-center backdrop-blur-[3px] group-hover:bg-orange-300/60 group-hover:transition-all group-hover:duration-300 group-hover:ease-in-out'>
				<Button
					title='Delete'
					type='button'
					handleClick={handleDelete}
					style='ease-in-out'
				/>
				<Button
					title='Edit'
					type='button'
					handleClick={handleEdit}
					style='ease-in-out'
				/>
			</div>
		</div>
	)
}

const Interest = PropTypes.shape({
	_id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
})

const Social = PropTypes.shape({
	_id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
})

BusinessCard.propTypes = {
	_id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	interests: PropTypes.arrayOf(Interest),
	socials: PropTypes.arrayOf(Social),
}

export default BusinessCard
