import { RevenueCardWithBoxShadow } from './components/RevenueCard'
import EnhancedRevenueCard from './components/enhancedRevenueCard'

const App = () => {
	return (
		<div className='grid grid-cols-3 p-10 gap-10'>
			<EnhancedRevenueCard />
			<RevenueCardWithBoxShadow
				title='Amount Processed'
				amount='₹23,92,312.19'
				orderCount={13}
			/>
			<RevenueCardWithBoxShadow
				title='Amount Processed'
				amount='₹23,92,312.19'
			/>
		</div>
	)
}

export default App
