import PropTypes from 'prop-types'

const withBoxShadow = (Component) => {
	const WithBoxShadow = (props) => {
		return (
			<div className='rounded-lg bg-black-100 shadow'>
				<Component {...props} />
			</div>
		)
	}

	return WithBoxShadow
}

withBoxShadow.propTypes = {
	Component: PropTypes.node,
}

export default withBoxShadow
