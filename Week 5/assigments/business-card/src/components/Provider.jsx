import { useState } from 'react'
import PropTypes from 'prop-types'
import AppContext from './context'

const Provider = (props) => {
	const { children } = props
	const [isEditForm, setIsEditForm] = useState(false)
	const [allCards, setAllCards] = useState([])
	const [card, setCard] = useState(null)
	const changeToEditForm = () => setIsEditForm(true)
	const changeToCreateForm = () => setIsEditForm(false)
	const addCardToEdit = (cardData) => setCard(cardData)
	const removeCardFromEdit = () => setCard(null)
	const reomveCard = (id) =>
		setAllCards((prev) => prev.filter((card) => card._id !== id))

	return (
		<AppContext.Provider
			value={{
				isEditForm,
				changeToEditForm,
				changeToCreateForm,
				card,
				addCardToEdit,
				removeCardFromEdit,
				allCards,
				reomveCard,
				setAllCards,
			}}>
			{children}
		</AppContext.Provider>
	)
}

Provider.propTypes = {
	children: PropTypes.node,
}

export default Provider
