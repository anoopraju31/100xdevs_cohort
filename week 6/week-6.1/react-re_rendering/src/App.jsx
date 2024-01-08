import { Fragment, useState } from 'react'
import PropTypes from 'prop-types'

const App = () => {
	const [title, setTitle] = useState('My name is Anoop Raju.')

	const changeTitle = () => {
		setTitle(`My Name is ${Math.random()}`)
	}

	return (
		<Fragment>
			<button onClick={changeTitle}> update title </button>
			<Header title={title} />
			<Header title='My name is Hemanth Kumar.' />
		</Fragment>
	)
}

const Header = ({ title }) => {
	return <div> {title} </div>
}

Header.propTypes = {
	title: PropTypes.string,
}

export default App
