import DropDown from './DropDown'
import EnhancedRevenueCard from './EnhancedRevenueCard'
import OutlinedButton from './OutlinedButton'
import { RevenueCardWithBoxShadow } from './RevenueCard'
import SearchInput from './SearchInput'
import TabButton from './TabButton'
import Table from './Table'

const Dashboard = () => {
	return (
		<main className='w-full p-3 smd:p-8 flex flex-col gap-8'>
			<div className='flex flex-col gap-6'>
				<div className='flex justify-between items-center'>
					<h2 className='text-xl font-medium text-black-12'> Overview </h2>

					<DropDown />
				</div>

				<div className='flex flex-wrap gap-5'>
					<div className='flex-1'>
						<EnhancedRevenueCard />
					</div>
					<div className='flex-1'>
						<RevenueCardWithBoxShadow
							title='Amount Pending'
							amount='₹92.312.20'
							orderCount={13}
						/>
					</div>
					<div className='flex-1'>
						<RevenueCardWithBoxShadow
							title='Amount Processed'
							amount='₹23,92,312.19'
						/>
					</div>
				</div>
			</div>

			<div className='w-full flex flex-col gap-6'>
				<div className='flex flex-col gap-6'>
					<h2 className='text-xl font-medium text-black-12 capitalize'>
						Transactions | This Month
					</h2>

					<div className='flex gap-3'>
						<TabButton title='Payouts' quantity={22} />
						<TabButton title='Refunds' quantity={6} isActive />
					</div>
				</div>

				<div className='w-full p-3 pb-2 rounded-lg bg-black-100 shadow flex flex-col gap-3'>
					<div className='flex gap-2 flex-col sm:flex-row items-end sm:justify-between sm:items-center'>
						<div className='flex-1 sm:flex-none w-full sm:w-fit'>
							<SearchInput
								variant='outlined'
								placeholder='Order ID or transaction ID'
							/>
						</div>

						<div className='flex items-center gap-4'>
							<DropDown />
							<OutlinedButton>
								<img className='py-0.5' src='/download.svg' alt='download' />
							</OutlinedButton>
						</div>
					</div>

					<div className='max-w-[var(--ww)] t rounded-t overflow-x-auto'>
						<Table />
					</div>
				</div>
			</div>
		</main>
	)
}

export default Dashboard
