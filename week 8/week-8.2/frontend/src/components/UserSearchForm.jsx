import { useRecoilCallback, useRecoilState } from 'recoil'
import { searchUserAtom } from '../store/atom'
import InputField from './InputField'

const UserSearchForm = () => {
	const [search, setSearch] = useRecoilState(searchUserAtom)
	const handleChange = useRecoilCallback(
		() => (e) => setSearch(e.target.value),
		[],
	)

	return (
		<form className='py-5'>
			<InputField
				id='userSearch'
				name='userSearch'
				label='User Search'
				type='text'
				placeholder='Search users'
				value={search}
				handleChange={handleChange}
			/>
		</form>
	)
}

export default UserSearchForm
