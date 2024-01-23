import SearchInput from './components/SearchInput'

const App = () => {
	return (
		<div className='max-w-sm mx-auto py-20'>
			<SearchInput
				id='search'
				name='search'
				label='search'
				placeholder='Search features, tutorials, etc.'
			/>

			<div className='py-5'></div>

			<SearchInput
				variant='outlined'
				id='search'
				name='search'
				label='search'
				placeholder='Search features, tutorials, etc.'
			/>
		</div>
	)
}

export default App
