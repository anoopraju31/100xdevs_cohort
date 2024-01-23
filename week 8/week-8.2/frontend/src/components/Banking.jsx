import UserSearchForm from './UserSearchForm'
import UsersList from './UsersList'

const Banking = () => {
	return (
		<section className='px-4 sm:px-10'>
			<h2 className='text-2xl text-orange-800 font-extrabold font-mono'>
				Users
			</h2>

			<UserSearchForm />
			<UsersList />
		</section>
	)
}

export default Banking
