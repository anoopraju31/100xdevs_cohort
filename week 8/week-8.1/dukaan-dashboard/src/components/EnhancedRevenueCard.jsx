import RevenueCard from './RevenueCard'

const EnhancedRevenueCard = () => {
	return (
		<div className='rounded-lg shadow flex flex-col text-black-95 bg-primary-blue hover:bg-hover-blue transition-colors duration-300 ease-in-out'>
			<RevenueCard
				title='Next Payout'
				amount='₹2,312.23'
				orderCount={23}
				textColor='!text-black-100 !fill-black-100'
			/>
			<div className='py-2 px-6 flex justify-between text-sm bg-hover-blue rounded-lg'>
				<p>Next payout date:</p>
				<p className='font-medium'> Today, 04:00PM </p>
			</div>
		</div>
	)
}

export default EnhancedRevenueCard
