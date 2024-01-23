import PropTypes from 'prop-types'
import ChevronRight from './ChevronRight'
import Help from './Help'
import withBoxShadow from './WithBoxShadow'

const RevenueCard = (props) => {
	const { title, amount, orderCount } = props
	return (
		<div className='p-5 flex flex-col gap-4'>
			<div className='flex gap-2 items-center text-black/70'>
				<h5> {title} </h5>

				<Help />
			</div>

			<div className='flex justify-between items-center'>
				<h5 className='text-4xl font-medium text-black-12'> {amount} </h5>

				{orderCount ? (
					<div className='flex items-center'>
						<p className='text-primary-blue text-base font-medium underline'>
							{orderCount} orders
						</p>
						<ChevronRight />
					</div>
				) : null}
			</div>
		</div>
	)
}

RevenueCard.propTypes = {
	title: PropTypes.string.isRequired,
	amount: PropTypes.string.isRequired,
	orderCount: PropTypes.number,
}

export const RevenueCardWithBoxShadow = withBoxShadow(RevenueCard)

export default RevenueCard
