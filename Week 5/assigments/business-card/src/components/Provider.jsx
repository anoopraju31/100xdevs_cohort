import { useState } from 'react'
import PropTypes from 'prop-types'
import AppContext from './context'

const Provider = (props) => {
	const { children } = props
	const [isEditForm, setIsEditForm] = useState(false)
	const [card, setCard] = useState(null)
	const toggleForm = () => setIsEditForm((prev) => !prev)
	const addCardToEdit = (cardData) => setCard(cardData)

	return (
		<AppContext.Provider
			value={{ isEditForm, toggleForm, card, addCardToEdit }}>
			{children}
		</AppContext.Provider>
	)
}

Provider.propTypes = {
	children: PropTypes.node,
}

export default Provider
