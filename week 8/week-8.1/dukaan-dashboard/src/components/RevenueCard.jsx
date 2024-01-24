import PropTypes from 'prop-types'
import ChevronRight from './ChevronRight'
import Help from './Help'
import withBoxShadow from './withBoxShadow'

const RevenueCard = (props) => {
	const { title, amount, orderCount, textColor } = props
	return (
		<div className='p-5 flex flex-col gap-4'>
			<div className={`flex gap-2 items-center text-black-30 ${textColor}`}>
				<h5 className='whitespace-nowrap'> {title} </h5>

				<Help styles={`fill-black-30 ${textColor}`} />
			</div>

			<div className='flex justify-between items-center gap-2'>
				<h5 className={`text-4xl font-medium text-black-12 ${textColor}`}>
					{' '}
					{amount}{' '}
				</h5>

				{orderCount ? (
					<div className='flex items-center cursor-pointer'>
						<p
							className={`text-primary-blue text-base font-medium underline whitespace-nowrap ${textColor}`}>
							{orderCount} orders
						</p>
						<ChevronRight styles={`fill-primary-blue ${textColor}`} />
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
	textColor: PropTypes.string,
}

export const RevenueCardWithBoxShadow = withBoxShadow(RevenueCard)

export default RevenueCard
