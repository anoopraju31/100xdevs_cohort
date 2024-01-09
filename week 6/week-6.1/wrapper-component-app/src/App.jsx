import PropTypes from 'prop-types'

const App = () => {
	return (
		<div>
			<CardWrapper>
				<TextComponent />
			</CardWrapper>
			<TextComponent />

			<CardWrapper>
				<CardWrapper>
					<CardWrapper>
						<TextComponent />
					</CardWrapper>
				</CardWrapper>
			</CardWrapper>
		</div>
	)
}

const TextComponent = () => {
	return <div className='text-component'> Hi there </div>
}

const CardWrapper = (props) => {
	const { children } = props
	return <div className='wrapper'>{children}</div>
}

CardWrapper.propTypes = {
	children: PropTypes.node,
}
export default App
