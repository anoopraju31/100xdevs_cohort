import { memo, useState } from 'react'
import PropTypes from 'prop-types'

const App = () => {
	const [title, setTitle] = useState('My name is Anoop Raju.')

	const changeTitle = () => {
		setTitle(`My Name is ${Math.random()}`)
	}

	return (
		<div>
			<button onClick={changeTitle}> update title </button>
			<Header title={title} />
			<Header title='My name is Hemanth Kumar.' />
			<Header title='My name is Hemanth Kumar.' />
			<Header title='My name is Hemanth Kumar.' />
			<Header title='My name is Hemanth Kumar.' />
			<Header title='My name is Hemanth Kumar.' />
			<Header title='My name is Hemanth Kumar.' />
			<Header title='My name is Hemanth Kumar.' />
		</div>
	)
}

const Header = memo((props) => {
	const { title } = props
	return <div> {title} </div>
})

Header.displayName = 'Header'

Header.propTypes = {
	title: PropTypes.string,
}

export default App
