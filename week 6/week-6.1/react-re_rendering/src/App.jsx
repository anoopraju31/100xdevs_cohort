import PropTypes from 'prop-types'
import React from 'react'

const App = () => {
	return (
		<React.Fragment>
			<Header title='My name is Anoop Raju.' />
			<Header title='My name is Hemanth Kumar.' />
		</React.Fragment>
	)
}

const Header = ({ title }) => {
	return <div> {title} </div>
}

Header.propTypes = {
	title: PropTypes.string,
}

export default App
