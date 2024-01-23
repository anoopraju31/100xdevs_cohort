import RevenueCard, { RevenueCardWithBoxShadow } from './components/RevenueCard'

const App = () => {
	return (
		<div className='grid grid-cols-2 p-10 gap-10'>
			<RevenueCard
				title='Amount Processed'
				amount='₹23,92,312.19'
				orderCount={13}
			/>

			<RevenueCardWithBoxShadow
				title='Amount Processed'
				amount='₹23,92,312.19'
				orderCount={13}
			/>
		</div>
	)
}

export default App
