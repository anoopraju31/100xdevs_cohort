import PropTypes from 'prop-types'

const NavItem = ({ icon, title, isCurrentPage }) => {
	return (
		<li
			className={`${
				isCurrentPage && 'bg-navbar-hover'
			} group px-4 py-2 flex gap-3 rounded hover:bg-navbar-hover font-inter transition-colors duration-300 cursor-pointer`}>
			<img
				src={icon}
				alt={title}
				className={`${
					isCurrentPage && 'opacity-100'
				} w-5 h-5 flex-shrink-0 opacity-80 group-hover:opacity-100 transition-colors duration-300`}
			/>

			<p
				className={`${
					isCurrentPage && 'opacity-100'
				} text-sm font-medium text-slate-100 whitespace-nowrap opacity-80 group-hover:opacity-100 transition-colors duration-300`}>
				{title}
			</p>
		</li>
	)
}

NavItem.propTypes = {
	icon: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	isCurrentPage: PropTypes.bool,
}

export default NavItem
