import PropTypes from 'prop-types'

const App = () => {
	return (
		<div>
			<Header title='My name is Anoop Raju.' />
			<Header title='My name is Hemanth Kumar.' />
		</div>
	)
}

const Header = ({ title }) => {
	return <div> {title} </div>
}

Header.propTypes = {
	title: PropTypes.string,
}

export default App
