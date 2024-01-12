import { useContext, useEffect } from 'react'
import toast from 'react-hot-toast'
import BusinessCard from '../components/BusinessCard'
import axios from '../utills/axios'
import AppContext from '../components/context'

const Home = () => {
	const { allCards, setAllCards } = useContext(AppContext)

	useEffect(() => {
		const getCards = async () => {
			try {
				const res = await axios.get('/business-card')
				setAllCards(res.data.cards)
			} catch (error) {
				toast.error(error.response.data.message)
			}
		}

		getCards()
	}, [setAllCards])

	if (allCards.length === 0)
		return (
			<main className='min-h-screen flex justify-center items-center bg-orange-50 py-20 px-5'>
				<h1 className='text-2xl font-mono font-bold text-orange-900'>
					Sorry, No cards available
				</h1>
			</main>
		)

	const allBusinessCards = allCards.map((card) => (
		<BusinessCard key={card._id} {...card} />
	))

	return (
		<main className='min-h-screen flex justify-center  bg-orange-50 py-20 px-5'>
			<div className='max-w-7xl w-full pt-10 grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 '>
				{allBusinessCards}
			</div>
		</main>
	)
}

export default Home
