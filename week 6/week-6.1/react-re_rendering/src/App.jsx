import { Fragment, useState } from 'react'
import PropTypes from 'prop-types'

const App = () => {
	return (
		<Fragment>
			<HeaderWithButton />
			<Header title='My name is Hemanth Kumar.' />
		</Fragment>
	)
}

const Header = ({ title }) => {
	return <div> {title} </div>
}

const HeaderWithButton = () => {
	const [title, setTitle] = useState('My name is Anoop Raju.')

	const changeTitle = () => {
		setTitle(`My Name is ${Math.random()}`)
	}

	return (
		<>
			<button onClick={changeTitle}> update title </button>
			<Header title={title} />
		</>
	)
}

Header.propTypes = {
	title: PropTypes.string,
}

export default App
