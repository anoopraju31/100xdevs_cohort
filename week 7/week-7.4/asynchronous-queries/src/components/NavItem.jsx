import PropTypes from 'prop-types'

const NavItem = (props) => {
	const { title, count, total } = props

	return (
		<div className='relative'>
			<p className='text-xl px-6 py-2 rounded-lg bg-orange-100 capitalize'>
				{title}
			</p>
			{count ? (
				<div className='absolute -top-3 -right-3 p-2 rounded-full leading-none bg-orange-300'>
					{count > 99 && !total ? '99+' : count}
				</div>
			) : null}
		</div>
	)
}

NavItem.propTypes = {
	title: PropTypes.string.isRequired,
	count: PropTypes.number,
	total: PropTypes.bool,
}

NavItem.defaultProps = {
	total: false,
}

export default NavItem
