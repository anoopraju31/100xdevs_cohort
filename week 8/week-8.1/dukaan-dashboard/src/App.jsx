import TabButton from './components/TabButton'

const App = () => {
	return (
		<div className='max-w-sm mx-auto py-20'>
			<TabButton title='Payouts' quantity={22} isActive={true} />
			<div className='py-5'></div>

			<TabButton title='Payouts' quantity={22} />
		</div>
	)
}

export default App
